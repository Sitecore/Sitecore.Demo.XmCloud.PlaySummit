import { RouteData } from '@sitecore-jss/sitecore-jss-nextjs';
import Cookies from 'js-cookie';

import {
  BoxeverScripts,
  logViewEvent as boxeverLogViewEvent,
  identifyVisitor as boxeverIdentifyVisitor,
  logEvent,
  saveDataExtension,
  WelcomeMessage,
  getDynamicWelcomeMessage as boxeverGetDynamicWelcomeMessage,
  isCdpConfigured as boxeverIsCdpConfigured,
  getGuestEmail as boxeverGetGuestEmail,
  getGuestFirstName as boxeverGetGuestFirstName,
  getGuestLastName as boxeverGetGuestLastName,
  shouldCloseSession as boxeverShouldCloseSession,
  ShouldCloseSessionResponse,
} from './BoxeverService';
import { TICKETS } from '../models/mock-tickets';
import { SessionPageFields } from '../types/session';
import { DLineItem } from '../models/ordercloud/DLineItem';
import { AddToCartPayload } from '../models/cdp/AddToCartPayload';
import { OrderCheckoutPayload, OrderItem } from '../models/cdp/OrderCheckoutPayload';
import { DOrder } from '../models/ordercloud/DOrder';
import { DPayment } from '../models/ordercloud/DPayment';
import { CDP_CUSTOM_EVENTS } from 'src/constants/cdp-custom-events';

export const isCdpConfigured = boxeverIsCdpConfigured;

export const CdpScripts: JSX.Element | undefined = BoxeverScripts;

export type { WelcomeMessage } from './BoxeverService';

type viewEventAdditionalData = {
  sitecoreTemplateName?: string;
  premiumContent?: boolean;
  audiences?: string[];
};

/**
 * Logs a page view event.
 */
export function logViewEvent(route?: RouteData): Promise<unknown> {
  const additionalData: viewEventAdditionalData = {};

  if (route) {
    if (route.templateName) {
      additionalData.sitecoreTemplateName = route.templateName;
    }
    if (route.templateName === 'Session' && route.fields) {
      const sessionFields = route.fields as unknown as SessionPageFields;

      additionalData.premiumContent = sessionFields.Premium?.value || false;
      additionalData.audiences = sessionFields.Audience
        ? sessionFields.Audience.map((audience) => audience.displayName)
        : [];
    }
  }

  return boxeverLogViewEvent(additionalData);
}

/**
 * Logs a custom audience preference event
 */
export function logAudiencePreferenceEvent(audience: string): Promise<unknown> {
  return logEvent(CDP_CUSTOM_EVENTS.audiencePreference.type, { audience });
}

/**
 * Saves the visitor name and email into its CDP profile.
 * Merges the visitor with any existing CDP profile with the same information.
 */
export function identifyVisitor(
  email: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string
): Promise<unknown> {
  return boxeverIdentifyVisitor(email, firstName, lastName, phoneNumber);
}

/**
 * Logs the purchase of a ticket as an event, and stores the owned ticket in the visitor CDP profile.
 */
export async function logTicketPurchase(ticketId: number, onSale: boolean): Promise<unknown> {
  const purchasedTicketItem = TICKETS[ticketId];
  // If the purchased ticket is an upgrade, store the target upgrade ticket in the data extension
  const ownedTicket =
    typeof purchasedTicketItem.upgradeTargetTicket !== 'undefined'
      ? TICKETS[purchasedTicketItem.upgradeTargetTicket]
      : purchasedTicketItem;
  const dataExtensionName = 'Ticket';

  const eventPayload = {
    ticketId: ticketId,
    ticketName: purchasedTicketItem.name,
    pricePaid: onSale ? purchasedTicketItem.salePrice : purchasedTicketItem.price,
  };

  const dataExtensionPayload = {
    key: dataExtensionName,
    ticketId: parseInt(ownedTicket.id),
    ticketName: ownedTicket.name,
  };

  await logEvent(CDP_CUSTOM_EVENTS.paymentFormCompleted.type);
  await logEvent(CDP_CUSTOM_EVENTS.paymentSuccessful.type);
  await logEvent(CDP_CUSTOM_EVENTS.ticketPurchased.type, eventPayload);
  return saveDataExtension(dataExtensionName, dataExtensionPayload);
}

/**
 * Logs a custom event and stores the data in the visitor CDP profile.
 */
export async function logAttendeeFormCompleted(): Promise<unknown> {
  const dataExtensionName = 'AttendeeFormCompleted';
  const dataExtensionPayload = {
    key: dataExtensionName,
  };
  await logEvent(CDP_CUSTOM_EVENTS.attendeeFormCompleted.type);
  return saveDataExtension(dataExtensionName, dataExtensionPayload);
}

/**
 * Logs a custom event when a ticket is selected
 */
export function logTicketSelected(): Promise<unknown> {
  return logEvent(CDP_CUSTOM_EVENTS.ticketSelected.type);
}

/**
 * Logs an ADD (add to cart) event
 */
export function logAddToCart(lineItem: DLineItem, quantity: number): Promise<unknown> {
  const addToCartPayload: AddToCartPayload = {
    product: {
      type: lineItem.Product.xp.ProductType.toUpperCase(),
      item_id: lineItem.Variant?.ID || lineItem.ProductID,
      name: lineItem.Product.Name,
      orderedAt: new Date().toISOString(),
      quantity: quantity,
      price: lineItem.UnitPrice,
      productId: lineItem.ProductID,
      currency: 'USD',
      referenceId: lineItem.ID,
    },
  };

  return logEvent('ADD', addToCartPayload);
}

/**
 * Logs an ORDER_CHECKOUT event
 */
export function logOrderCheckout(
  order: DOrder,
  lineItems: DLineItem[],
  payments: DPayment[]
): Promise<unknown> {
  const orderItems: OrderItem[] = [];
  lineItems.forEach((lineItem) => {
    orderItems.push({
      type: lineItem.Product.Name,
      referenceId: lineItem.ID,
      orderedAt: new Date(lineItem.DateAdded).toISOString(),
      status: 'PURCHASED',
      currencyCode: 'USD',
      price: lineItem.UnitPrice,
      name: lineItem.Product.Name,
      productId: lineItem.ProductID,
      quantity: lineItem.Quantity,
    });
  });

  const orderCheckoutPayload: OrderCheckoutPayload = {
    order: {
      orderItems,
      referenceId: order.ID,
      orderedAt: new Date(order.DateSubmitted || order.LastUpdated).toISOString(),
      status: 'PURCHASED',
      currencyCode: 'USD',
      price: order.Total,
      paymentType: 'Card',
      cardType: payments[0].xp?.CreditCard?.CardType,
    },
  };
  return logEvent('ORDER_CHECKOUT', orderCheckoutPayload);
}

export function getDynamicWelcomeMessage(
  ipAddress: string,
  language: string
): Promise<WelcomeMessage> {
  return boxeverGetDynamicWelcomeMessage(ipAddress, language);
}

export async function getGuestEmail(): Promise<string> {
  return boxeverGetGuestEmail();
}

export async function getGuestFirstName(): Promise<string> {
  return boxeverGetGuestFirstName();
}

export async function getGuestLastName(): Promise<string> {
  return boxeverGetGuestLastName();
}

export function shouldCloseSession(): Promise<ShouldCloseSessionResponse> {
  return boxeverShouldCloseSession();
}

/**
 * Stores the Search profile data for the current user in the visitor CDP profile.
 */
export const storeSearchProfileData = (payload: {
  entities: [
    {
      affinity: { audience: [{ value: string; score: number }] };
      events: { views: [{ id: string }] };
    }
  ];
}): Promise<unknown> => {
  const dataExtensionName = 'SearchProfileData';

  // Transform the affinity scores & page views into suitable forms for the guest data extension
  const affinities = payload?.entities?.[0].affinity?.audience?.reduce(
    (obj, item) => (
      (obj[
        item.value
          .split(' ')
          .map((x, index) => (index === 0 ? x.toLowerCase() : x))
          .join('')
      ] = Math.round((item.score + Number.EPSILON) * 100) / 100),
      obj
    ),
    {} as Record<string, number>
  );

  const pageViews = payload?.entities?.[0].events?.views
    ?.slice(0, 5)
    .reduce(
      (obj, item, index) => ((obj[`page${index + 1}`] = sessionStorage.getItem(item.id)), obj),
      {} as Record<string, string>
    );

  const dataExtensionPayload = {
    key: dataExtensionName,
    uuid: Cookies.get('__rutma').split('.')[0],
    ...affinities,
    ...pageViews,
  };

  return saveDataExtension(dataExtensionName, dataExtensionPayload);
};
