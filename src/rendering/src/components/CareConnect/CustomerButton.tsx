import { Customer } from './CareConnect';

type CustomerButtonProps = {
  customer: Customer;
  onClick: (id: string) => void;
  isActive?: boolean;
};

const CustomerButton = ({ customer, onClick, isActive }: CustomerButtonProps) => {
  return (
    <button className={isActive ? 'active' : ''} onClick={() => onClick(customer.id)}>
      <h5 className="customer-name">
        {customer.firstName} {customer.lastName}
      </h5>
      <span className="customer-date">{customer.date}</span>
      <span className="customer-status">{customer.status}</span>
    </button>
  );
};

export default CustomerButton;
