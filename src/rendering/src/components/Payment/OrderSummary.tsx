import { useEffect, useState } from 'react';

import useTicketOfferId from 'src/hooks/useTicketOffer';
import { TICKETS } from '../../models/mock-tickets';

type OrderSummaryProps = {
  ticketID?: number;
};

const OrderSummary = (props: OrderSummaryProps): JSX.Element => {
  const [ticketID, setTicketID] = useState(null);
  const ticketOfferId = useTicketOfferId();

  useEffect(() => {
    setTicketID(
      props?.ticketID ?? parseInt(new URLSearchParams(window?.location?.search).get('ticket'))
    );
  }, [props?.ticketID]);

  const ticket = TICKETS[ticketID];

  // The empty div in the else clause is required. Without it, the class="line-item total-line" of the total line is not rendered to the DOM for unknown reasons.
  const fees =
    ticket?.fees > 0 ? (
      <div>
        <div className="line-item">
          <div className="item-name">Fees</div>
          <div className="item-price">${ticket.fees}.00</div>
        </div>
        <div>x 1 Service Charge</div>
      </div>
    ) : (
      <div></div>
    );

  const ticketPrice = ticketID === ticketOfferId ? ticket?.salePrice : ticket?.price;

  if (!ticket) return <></>;

  return (
    <div className="order-summary">
      <div className="summary-header">Order Summary</div>
      <div className="summary-content">
        <div className="details">Details</div>
        <div>
          <div className="line-item">
            <div className="item-name">{ticket.name}</div>
            <div className="item-price">${ticketPrice}.00</div>
          </div>
          <div>x 1 {ticket.pass}</div>
        </div>
        {fees}
        <div className="line-item total-line">
          <div>Total</div>
          <div>${ticketPrice + ticket.fees}.00</div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
