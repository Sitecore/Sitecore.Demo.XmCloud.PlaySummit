import { Customer, getCustomerTicketStatus } from './CareConnect';

type CustomerButtonProps = {
  customer: Customer;
  onClick: (ref: string) => void;
  isActive?: boolean;
};

const CustomerButton = ({ customer, onClick, isActive }: CustomerButtonProps) => {
  return (
    <button className={isActive ? 'active' : ''} onClick={() => onClick(customer.ref)}>
      <h5 className="customer-name">
        {customer.firstName} {customer.lastName}
      </h5>
      <span className="customer-date">{new Date(customer.firstSeen).toLocaleDateString()}</span>
      <span className="customer-status">{getCustomerTicketStatus(customer)}</span>
    </button>
  );
};

export default CustomerButton;
