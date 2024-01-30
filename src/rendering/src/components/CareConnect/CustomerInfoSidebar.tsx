import { faEnvelope, faHistory, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Customer, getCustomerTicketStatus } from './CareConnect';
import CustomerHistory from './CustomerHistory';

type CustomerInfoSidebarProps = {
  customer: Customer;
};

const CustomerInfoSidebar = ({ customer }: CustomerInfoSidebarProps) => {
  return (
    <aside className="customer-info-sidebar">
      <h1 className="customer-name">
        {customer?.firstName} {customer?.lastName}
      </h1>
      <div className="customer-details">
        <span className="customer-status">{getCustomerTicketStatus(customer)}</span>
        {!!customer?.phone && (
          <span className="customer-phone">
            <FontAwesomeIcon icon={faPhone} />
            {customer.phone}
          </span>
        )}
        {!!customer?.address && (
          <span className="customer-address">
            <FontAwesomeIcon icon={faLocationArrow} />
            {customer.address}
          </span>
        )}
        <span className="customer-email">
          <FontAwesomeIcon icon={faEnvelope} />
          {customer?.email}
        </span>
      </div>
      <div className="next-best-offer">
        <h6>
          <FontAwesomeIcon icon={faHistory} />
          Next best offer
        </h6>
        <p>Upgrade to VIP ticket and enjoy a 20% discount on the VIP ticket price!</p>
        <button>Apply offer</button>
      </div>
      <CustomerHistory customer={customer} />
    </aside>
  );
};

export default CustomerInfoSidebar;
