import CustomerInfoSidebar from './CustomerInfoSidebar';
import CareConnectHeader from './CareConnectHeader';
import CustomerButton from './CustomerButton';
import { useCallback, useEffect, useState } from 'react';
import { getAllGuests, getExtendedGuest } from 'src/services/BoxeverService';
import SpinningLoader from './SpinningLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs/utils';

export interface CdpEvent {
  ref: string;
  type: string;
  createdAt: string;
  arbitraryData?: {
    ticketId?: number;
    ticketName?: string;
  };
}

export interface Customer {
  ref: string;
  firstName: string;
  lastName: string;
  firstSeen: string;
  status: string;
  phoneNumbers: string[];
  city: string;
  email: string;
  dataExtensions: {
    key?: string;
    values?: {
      ticketId?: number;
      ticketName?: string;
    };
  }[];
  sessions: {
    referer: string;
    events: CdpEvent[];
  }[];
}

export const getCustomerTicketStatus = (customer: Customer) => {
  const attendeeFormCompleted = !!customer?.dataExtensions?.find(
    (ext: { key: string }) => ext.key === 'AttendeeFormCompleted'
  );

  const ticketName = customer?.dataExtensions?.find((ext: { key: string }) => ext.key === 'Ticket')
    ?.values.ticketName;

  return !!ticketName
    ? `${ticketName}`
    : attendeeFormCompleted
    ? 'Abandoned purchase'
    : 'No ticket';
};

const CareConnect = () => {
  const [customers, setCustomers] = useState([]);
  const [activeCustomerRef, setActiveCustomerRef] = useState('');

  const getGuestFullData = useCallback(async (ref: string) => {
    return await getExtendedGuest(ref).then((res) => res);
  }, []);

  const getCustomers = useCallback(async () => {
    try {
      const guests = await getAllGuests().then((res: { items: Customer[] }) => res.items);

      const customers = (await Promise.all(
        guests.map(async (customer: Customer) => {
          const extendedCustomer = await getGuestFullData(customer.ref);
          return extendedCustomer;
        })
      )) as Customer[];

      const customersFromCurrentInstance = customers
        .filter((customer) =>
          customer.sessions?.some((session) => session?.referer?.includes(getPublicUrl()))
        )
        .slice(0, 10);

      setCustomers(customersFromCurrentInstance);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  }, [getGuestFullData]);

  const handleCustomerChange = useCallback((ref: string) => {
    setActiveCustomerRef(ref);
  }, []);

  const handleRefresh = useCallback(() => {
    setCustomers([]);
    getCustomers();
  }, [getCustomers]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  useEffect(() => {
    if (!!customers) {
      setActiveCustomerRef(customers[0]?.ref);
    }
  }, [customers]);

  return (
    <>
      <CareConnectHeader />
      <main className="careconnect-main">
        <div className="customers-list">
          <h1>
            Customer Information{' '}
            {!customers.length ? (
              <SpinningLoader />
            ) : (
              <button onClick={handleRefresh}>
                <FontAwesomeIcon icon={faSyncAlt} />
              </button>
            )}
          </h1>
          <ul>
            {customers?.map((customer) => (
              <li key={customer?.ref}>
                <CustomerButton
                  customer={customer}
                  onClick={handleCustomerChange}
                  isActive={activeCustomerRef === customer?.ref}
                />
              </li>
            ))}
          </ul>
        </div>
        <CustomerInfoSidebar
          customer={customers?.find((customer) => customer?.ref === activeCustomerRef)}
        />
      </main>
    </>
  );
};

export default CareConnect;
