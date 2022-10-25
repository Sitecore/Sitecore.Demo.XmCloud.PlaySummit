import { PropsWithChildren } from 'react';

export type EntityTabProps = PropsWithChildren & {
  name?: string;
  active?: boolean;
};

const EntityTab = (props: EntityTabProps): JSX.Element => {
  return (
    <div
      data-state={props.active ? 'active' : 'inactive'}
      hidden={!props.active}
      data-orientation="horizontal"
      role="tabpanel"
      tabIndex={0}
      className="entity-tab-content"
    >
      {props.active ? props.children : null}
    </div>
  );
};

export default EntityTab;
