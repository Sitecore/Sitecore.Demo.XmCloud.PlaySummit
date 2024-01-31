import { useCallback, useMemo, useState } from 'react';
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

  const nextTicket = useMemo(() => {
    const attendeeFormCompleted = !!customer?.dataExtensions?.find(
      (ext: { key: string }) => ext.key === 'AttendeeFormCompleted'
    );

    const ticketId = customer?.dataExtensions?.find((ext: { key: string }) => ext.key === 'Ticket')
      ?.values.ticketId;

    return ticketId === 0
      ? TICKETS.find((t) => parseInt(t.id) === 1)
      : ticketId === 1
      ? TICKETS.find((t) => parseInt(t.id) === 2)
      : !!attendeeFormCompleted
      ? TICKETS.find((t) => parseInt(t.id) === 0)
      : null;
  }, [customer]);

  const handleApplyOffer = useCallback(async () => {
    setButtonState(BUTTON_STATES.loading);

    const extensionName = 'TicketOffer';
    const ticket = {
      key: extensionName,
      ticketId: parseInt(nextTicket.id),
      ticketName: nextTicket.name,
      salePrice: Math.round(0.8 * nextTicket.price),
    };

    console.log(ticket);

    return await setGuestDataExtension(customer.ref, extensionName, ticket).then(() =>
      setButtonState(BUTTON_STATES.inactive)
    );
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
