import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import RequireDatasource from '../NonSitecore/RequireDatasource';
import Link from 'next/link';
import { useRouter } from 'next/router';

type PaymentProgressProps = ComponentProps & {
  fields: {
    ActiveStep: Field<number>;
  };
};

function GetActiveClass(activeStep: number, index: number) {
  let className = 'payment-progress-item';
  if (index < activeStep) {
    className += ' previous';
  } else if (index == activeStep) {
    className += ' active';
  } else if (index > activeStep) {
    className += ' next';
  }
  return className;
}

const PaymentProgress = (props: PaymentProgressProps): JSX.Element => {
  const router = useRouter();
  const sxaStyles = `${props.params?.styles || ''}`;

  if (!props.fields) {
    return <RequireDatasource />;
  }

  const ticketId = router?.query?.ticket ?? 0;

  const steps = [
    {
      index: 1,
      link: `/tickets/registration/attendee?ticket=${ticketId}`,
      text: 'Personal Information',
    },
    {
      index: 2,
      link: `/tickets/payment?ticket=${ticketId}`,
      text: 'Payment Information',
    },
    {
      index: 3,
      link: `/tickets/payment/confirmed?ticket=${ticketId}`,
      text: 'Payment Confirmation',
    },
  ];

  const stepLinks = steps.map((step, index) => (
    <Link
      href={step.link}
      key={index}
      className={GetActiveClass(props.fields.ActiveStep.value, step.index)}
    >
      {step.text}
      <span>{step.index < steps.length ? '❯' : ''}</span>
    </Link>
  ));

  return <div className={`payment-progress ${sxaStyles}`}>{stepLinks}</div>;
};

export const Default = PaymentProgress;
