import { ComponentProps } from 'lib/component-props';
import OrderSummary from './OrderSummary';
import TicketPaymentConfirmed from './TicketPaymentConfirmed';

const PaymentConfirmed = (props: ComponentProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <div className={`payment-confirmed-page ${sxaStyles}`}>
      <TicketPaymentConfirmed />
      <OrderSummary />
    </div>
  );
};

export const Default = PaymentConfirmed;
