import { faEnvelope, faHistory, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Customer } from './CareConnect';

type CustomerInfoSidebarProps = {
  customer: Customer;
};

const CustomerInfoSidebar = ({ customer }: CustomerInfoSidebarProps) => {
  return (
    <aside className="customer-info-sidebar">
      <h1 className="customer-name">
        {customer.firstName} {customer.lastName}
      </h1>
      <div className="customer-details">
        <span className="customer-status">{customer.status}</span>
        <span className="customer-phone">
          <FontAwesomeIcon icon={faPhone} />
          {customer.phone}
        </span>
        <span className="customer-address">
          <FontAwesomeIcon icon={faLocationArrow} />
          {customer.address}
        </span>
        <span className="customer-email">
          <FontAwesomeIcon icon={faEnvelope} />
          {customer.email}
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
      <div className="customer-history">
        <h6>
          <FontAwesomeIcon icon={faHistory} />
          History
        </h6>
        <ul>
          <li>
            <span>2 mins ago</span>
            <p>Regular ticket purchase</p>
          </li>
          <li>
            <span>6 mins ago</span>
            <p>Payment successfull</p>
          </li>
          <li>
            <span>10 mins ago</span>
            <p>Reviewing cart</p>
          </li>
          <li>
            <span>15 mins ago</span>
            <p>Entering shipping and payment information</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default CustomerInfoSidebar;
