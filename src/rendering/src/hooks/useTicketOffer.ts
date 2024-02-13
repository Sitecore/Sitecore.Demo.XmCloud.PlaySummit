import { Customer } from 'components/CareConnect/CareConnect';
import { useState, useEffect } from 'react';
import { getExtendedGuest } from 'src/services/BoxeverService';

const useTicketOfferId = () => {
  const [ticketOfferId, setTicketOfferId] = useState<undefined | number>(undefined);

  useEffect(() => {
    const fetchTicketOfferId = async () => {
      try {
        const customer = (await getExtendedGuest()) as Customer;
        const ticketOfferId = customer.dataExtensions?.find((ext) => ext.key === 'TicketOffer')
          ?.values?.ticketId;

        setTicketOfferId(ticketOfferId);
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching ticket offer ID:', error);
      }
    };

    fetchTicketOfferId();
  }, []);

  return ticketOfferId;
};

export default useTicketOfferId;
