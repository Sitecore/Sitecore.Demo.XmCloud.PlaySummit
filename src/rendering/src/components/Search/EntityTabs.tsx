import { useCallback, useContext, useState } from 'react';
import EntityTab from './EntityTab';
import EntityTabContent from './EntityTabContent';
import { SearchTabContext } from './SearchTabProvider';

export type Tab = {
  id: string;
  name: string;
  color?: string;
  Component: () => JSX.Element;
};

export type EntityTabsProps = {
  className?: string;
  theme?: string;
  defaultSelected: Tab['id'];
  tabs: Tab[];
};

const EntityTabs = (props: EntityTabsProps): JSX.Element => {
  const { totals } = useContext(SearchTabContext);
  const themeClass = props.theme ? `entity-tabs-${props.theme}` : '';
  const [activeTab, setActiveTab] = useState<Tab['id']>(() => props.defaultSelected);
  const onSelectTab = useCallback((id: Tab['id']) => {
    setActiveTab(id);
  }, []);
  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      className={`entity-tabs ${themeClass} ${props.className || ''}`}
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        aria-label="Manage your account"
        className="entity-tabs-list"
        tabIndex={0}
        data-orientation="horizontal"
      >
        {props.tabs.map(({ id, name, color }) => (
          <EntityTab
            key={id}
            id={id}
            active={activeTab === id}
            name={`${name}${totals[id] >= 0 ? `(${totals[id]})` : ''}`}
            color={color}
            onSelect={onSelectTab}
          />
        ))}
      </div>
      {props.tabs.map(({ id, Component: TabContentComponent }) => (
        <EntityTabContent key={id} active={activeTab === id}>
          <TabContentComponent />
        </EntityTabContent>
      ))}
    </div>
  );
};

export default EntityTabs;
