import { useCallback } from 'react';

export type EntityTabProps = {
  id: string;
  name: string;
  active: boolean;
  color?: string;
  onSelect?: (id: string) => void;
};

const EntityTab = (props: EntityTabProps): JSX.Element => {
  const { id, onSelect } = props;
  const onSelectTabCallback = useCallback(() => {
    onSelect && onSelect(id);
  }, [onSelect, id]);
  return (
    <button
      type="button"
      role="tab"
      aria-selected={props.active}
      data-state={props.active ? 'active' : 'inactive'}
      className="entity-tab"
      tabIndex={props.active ? 0 : -1}
      data-orientation="horizontal"
      onClick={!props.active ? onSelectTabCallback : undefined}
      style={{ '--entity-tab-color': props.color }}
    >
      {props.name}
    </button>
  );
};

export default EntityTab;
