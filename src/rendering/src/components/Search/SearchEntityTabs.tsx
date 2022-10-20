import { useCallback, useContext, useState, FC, useEffect } from 'react';
import SearchEntityTab from './SearchEntityTab';
import EntityTabContent from './SearchEntityTabContent';
import { SearchContext } from './SearchProvider';

export type Tab = {
  id: string;
  name: string;
  color?: string;
  Component: FC;
};

export type EntityTabsProps = {
  className?: string;
  theme?: string;
  selected: Tab['id'];
  tabs: Tab[];
};

const SearchEntityTabs = (props: EntityTabsProps): JSX.Element => {
  const { totals } = useContext(SearchContext);
  const { selected } = props;
  const themeClass = props.theme ? `entity-tabs-${props.theme}` : '';
  const [activeTab, setActiveTab] = useState<Tab['id']>(selected);
  useEffect(() => {
    setActiveTab(selected);
  }, [selected]);
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
          <SearchEntityTab
            key={id}
            id={id}
            active={activeTab === id}
            name={`${name}${totals[id] >= 0 ? ` (${totals[id]})` : ''}`}
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

export default SearchEntityTabs;
