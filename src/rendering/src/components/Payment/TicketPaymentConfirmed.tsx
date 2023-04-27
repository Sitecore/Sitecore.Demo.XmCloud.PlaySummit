import Link from 'next/link';
import { getPublicAssetUrl } from '../../../src/helpers/PublicUrlHelper';

const TicketPaymentConfirmed = (): JSX.Element => {
  const publicUrl = getPublicAssetUrl();

  return (
    <div className="ticket-payment-confirmed">
      <h2>Payment Confirmed</h2>
      <p>
        Thank you for your order. We look forward to seeing you at the PLAY! Summit. Use the
        following Code to check-in during the event.
      </p>
      <img className="qr-code" src={`${publicUrl}/assets/img/payment/qr.png`} alt="confirmed" />
      <div>
        <Link href="/tickets" className="btn-main btn-block">
          Download Ticket
        </Link>
      </div>
      <div>
        <Link href="/sessions" className="btn-main btn-block">
          Browse Sessions
        </Link>
      </div>
    </div>
  );
};

export default TicketPaymentConfirmed;
