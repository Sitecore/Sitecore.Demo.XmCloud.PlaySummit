import CustomerInfoSidebar from './CustomerInfoSidebar';
import CareConnectHeader from './CareConnectHeader';
import CustomerButton from './CustomerButton';
import { useCallback, useEffect, useState } from 'react';
import { getAllGuests, getExtendedGuest } from 'src/services/BoxeverService';

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
  phone: string;
  address: string;
  email: string;
  dataExtensions: {
    key?: string;
    values?: {
      ticketId?: number;
      ticketName?: string;
    };
  }[];
  sessions: {
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

  const handleCustomerChange = useCallback((ref: string) => {
    setActiveCustomerRef(ref);
  }, []);

  useEffect(() => {
    const getGuestFullData = async (ref: string) => {
      return await getExtendedGuest(ref).then((res) => res);
    };

    const getCustomers = async () => {
      try {
        const guests = await getAllGuests().then((res: { items: Customer[] }) => res.items);

        const customers = await Promise.all(
          guests.map(async (customer: Customer) => {
            const extendedCustomer = await getGuestFullData(customer.ref);
            return extendedCustomer;
          })
        );

        setCustomers(customers);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    getCustomers();
  }, []);

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
          <h1>Customer Information</h1>
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
