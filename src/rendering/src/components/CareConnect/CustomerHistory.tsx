import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CdpEvent, Customer } from './CareConnect';
import { useEffect, useState } from 'react';
import { CDP_CUSTOM_EVENTS } from 'src/constants/cdp-custom-events';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

const getHistoryEvents = (customer: Customer): CdpEvent[] => {
  const historyEvents = Object.values(CDP_CUSTOM_EVENTS).map((event) => event.type);
  const maxResults = 8;
  const matchingEvents: CdpEvent[] = [];

  for (const session of customer.sessions) {
    if (session.referer?.includes(getPublicUrl())) {
      for (const event of session.events) {
        if (historyEvents.includes(event.type)) {
          matchingEvents.push(event);

          if (matchingEvents.length === maxResults) {
            break;
          }
        }
      }
    }

    if (matchingEvents.length === maxResults) {
      break;
    }
  }

  return matchingEvents;
};

const getEventDisplayName = (event: CdpEvent): string => {
  if (event.type === CDP_CUSTOM_EVENTS.ticketPurchased.type) {
    return `${event.arbitraryData?.ticketName} purchased`;
  } else if (event.type === CDP_CUSTOM_EVENTS.ticketOfferApplied.type) {
    return `Offer: ${event.arbitraryData?.ticketName} discount`;
  } else {
    return Object.values(CDP_CUSTOM_EVENTS).find((e) => e.type === event.type).displayName;
  }
};

function calculateTimeDifference(date: string | Date) {
  const currentDate = new Date();
  const inputDate = new Date(date);

  if (
    inputDate.getDate() === currentDate.getDate() &&
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  ) {
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    }
  } else {
    return inputDate.toLocaleDateString();
  }
}

const CustomerHistory = ({ customer }: { customer: Customer }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!!customer) {
      setEvents(getHistoryEvents(customer));
    }
  }, [customer]);

  return (
    <div className="customer-history">
      <h6>
        <FontAwesomeIcon icon={faHistory} />
        History
      </h6>
      <ul>
        {events.map((event: CdpEvent) => (
          <li key={event.ref}>
            <span>{calculateTimeDifference(event.createdAt)}</span>
            <p>{getEventDisplayName(event)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerHistory;
