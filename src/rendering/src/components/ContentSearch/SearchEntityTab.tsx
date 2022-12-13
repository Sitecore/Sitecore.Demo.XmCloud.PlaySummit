import { CSSProperties, useCallback } from 'react';

type SearchEntityTabProps = {
  id: string;
  name: string;
  active: boolean;
  color?: string;
  onSelect?: (id: string) => void;
};

const SearchEntityTab = (props: SearchEntityTabProps): JSX.Element => {
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
      style={props.color ? ({ '--entity-tab-color': props.color } as CSSProperties) : undefined}
    >
      {props.name}
    </button>
  );
};

export default SearchEntityTab;
