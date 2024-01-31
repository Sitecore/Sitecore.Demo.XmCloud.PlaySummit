import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Customer, getCustomerTicketStatus } from './CareConnect';
import CustomerHistory from './CustomerHistory';
import CustomerNextBestOffer from './CustomerNextBestOffer';

const CustomerInfoSidebar = ({ customer }: { customer: Customer }) => {
  if (!customer) return <></>;

  return (
    <aside className="customer-info-sidebar">
      <h1 className="customer-name">
        {customer?.firstName} {customer?.lastName}
      </h1>
      <div className="customer-details">
        <span className="customer-status">{getCustomerTicketStatus(customer)}</span>
        {!!customer?.phoneNumbers?.length && (
          <span className="customer-phone">
            <FontAwesomeIcon icon={faPhone} />
            {customer.phoneNumbers[0]}
          </span>
        )}
        {!!customer?.city && (
          <span className="customer-address">
            <FontAwesomeIcon icon={faLocationArrow} />
            {customer.city}
          </span>
        )}
        <span className="customer-email">
          <FontAwesomeIcon icon={faEnvelope} />
          {customer?.email}
        </span>
      </div>
      <CustomerNextBestOffer customer={customer} />
      <CustomerHistory customer={customer} />
    </aside>
  );
};

export default CustomerInfoSidebar;
