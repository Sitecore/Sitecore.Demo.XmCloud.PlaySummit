import Filter, { Option } from './Filter';

export type FiltersProps = {
  onChange: (id: string, value: string) => void;
  options: Record<'schedule' | 'rooms', Option[]>;
  className?: string;
};

const filters: { id: 'schedule' | 'rooms'; name: string }[] = [
  {
    id: 'schedule',
    name: 'Schedule',
  },
  {
    id: 'rooms',
    name: 'Room',
  },
];

const Filters = (props: FiltersProps): JSX.Element => {
  return (
    <div className={`search-filters ${props.className || ''}`}>
      <div>Filter by</div>
      <div className="search-filters-list">
        {filters.map(({ id, name }) => (
          <Filter
            key={id}
            name={name}
            options={props.options[id]}
            onChange={(value) => props.onChange(id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
