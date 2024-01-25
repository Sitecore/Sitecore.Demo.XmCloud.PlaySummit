import CustomerInfoSidebar from './CustomerInfoSidebar';
import CareConnectHeader from './CareConnectHeader';
import CustomerButton from './CustomerButton';
import { useCallback, useState } from 'react';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  date: string;
  status: string;
  phone: string;
  address: string;
  email: string;
}

const MOCK_DATA = [
  {
    id: '1',
    firstName: 'Alexandra',
    lastName: 'Alvarez',
    date: '25/01/2024',
    status: 'Regular ticket purchase',
    phone: '+359 879 333 333',
    address: 'Maple St. 12/14',
    email: 'demouser@gmail.com',
  },
  {
    id: '2',
    firstName: 'Benjamin',
    lastName: 'Bennett',
    date: '09/02/2023',
    status: 'Abandoned ticket purchase',
    phone: '+359 879 222 222',
    address: 'Jumbo St. 16',
    email: 'ben.bennet@gmail.com',
  },
];

const CareConnect = () => {
  const [activeCustomerId, setActiveCustomerId] = useState(MOCK_DATA[0].id);

  const handleCustomerChange = useCallback((id: string) => {
    setActiveCustomerId(id);
  }, []);

  return (
    <>
      <CareConnectHeader />
      <main className="careconnect-main">
        <div className="customers-list">
          <h1>Customer Information</h1>
          <ul>
            {MOCK_DATA.map((customer) => (
              <li key={customer.id}>
                <CustomerButton
                  customer={customer}
                  onClick={handleCustomerChange}
                  isActive={activeCustomerId === customer.id}
                />
              </li>
            ))}
          </ul>
        </div>
        <CustomerInfoSidebar
          customer={MOCK_DATA.find((customer) => customer.id === activeCustomerId)}
        />
      </main>
    </>
  );
};

export default CareConnect;
