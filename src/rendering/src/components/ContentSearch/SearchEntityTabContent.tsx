import { PropsWithChildren } from 'react';

type SearchEntityTabContentProps = PropsWithChildren & {
  name?: string;
  active?: boolean;
};

const SearchEntityTabContent = (props: SearchEntityTabContentProps): JSX.Element => {
  return (
    <div
      data-state={props.active ? 'active' : 'inactive'}
      hidden={!props.active}
      data-orientation="horizontal"
      role="tabpanel"
      tabIndex={0}
      className="entity-tab-content"
    >
      {props.children}
    </div>
  );
};

export default SearchEntityTabContent;
