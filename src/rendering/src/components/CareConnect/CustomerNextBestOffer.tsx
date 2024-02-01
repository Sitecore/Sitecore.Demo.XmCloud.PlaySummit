import { useCallback, useEffect, useMemo, useState } from 'react';
import { faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Customer } from './CareConnect';
import { TICKETS } from 'src/models/mock-tickets';
import { setGuestDataExtension } from 'src/services/BoxeverService';
import SpinningLoader from './SpinningLoader';

const BUTTON_STATES = {
  default: 'DEFAULT',
  loading: 'LOADING',
  inactive: 'INACTIVE',
};

const CustomerNextBestOffer = ({ customer }: { customer: Customer }) => {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.default);

  useEffect(() => {
    setButtonState(BUTTON_STATES.default);
  }, [customer]);

  const nextTicket = useMemo(() => {
    const attendeeFormCompleted = !!customer?.dataExtensions?.find(
      (ext: { key: string }) => ext.key === 'AttendeeFormCompleted'
    );

    const ticketId = customer?.dataExtensions?.find((ext: { key: string }) => ext.key === 'Ticket')
      ?.values.ticketId;

    switch (ticketId) {
      case 0:
        return TICKETS.find((t) => parseInt(t.id) === 1);
      case 1:
        return TICKETS.find((t) => parseInt(t.id) === 2);
      case 2:
        return null;
      default:
        return attendeeFormCompleted ? TICKETS.find((t) => parseInt(t.id) === 0) : null;
    }
  }, [customer]);

  const handleApplyOffer = useCallback(async () => {
    setButtonState(BUTTON_STATES.loading);

    try {
      const extensionName = 'TicketOffer';
      const ticket = {
        key: extensionName,
        ticketId: parseInt(nextTicket.id),
        ticketName: nextTicket.name,
      };

      await setGuestDataExtension(customer.ref, extensionName, ticket);
      setButtonState(BUTTON_STATES.inactive);
    } catch (error) {
      console.error('Error applying offer:', error);
      setButtonState(BUTTON_STATES.default);
    }
  }, [customer, nextTicket]);

  const offerButton = useMemo(() => {
    switch (buttonState) {
      case BUTTON_STATES.loading:
        return (
          <button className="loading" disabled>
            <SpinningLoader />
          </button>
        );
      case BUTTON_STATES.inactive:
        return (
          <button disabled>
            <FontAwesomeIcon icon={faCheck} />
            Offer applied
          </button>
        );
      default:
        return <button onClick={handleApplyOffer}>Apply offer</button>;
    }
  }, [buttonState, handleApplyOffer]);

  if (!nextTicket) return <></>;

  return (
    <div className="next-best-offer">
      <h6>
        <FontAwesomeIcon icon={faHistory} />
        Next best offer
      </h6>
      <p>
        {nextTicket?.id === '0' ? 'Purchase an' : 'Upgrade to'} {nextTicket?.name} and enjoy a{' '}
        <b>20% discount on the {nextTicket?.name} price!</b>
      </p>
      {offerButton}
    </div>
  );
};

export default CustomerNextBestOffer;
