import SearchFilter, { Option } from './SearchFilter';

export type SearchFiltersProps = {
  onChange: (id: string, value: string) => void;
  options: Record<'schedule' | 'rooms', Option[]>;
  className?: string;
};

const filters: { id: 'schedule' | 'rooms'; name: string }[] = [
  {
    id: 'schedule',
    name: 'Day',
  },
  {
    id: 'rooms',
    name: 'Room',
  },
];

const SearchFilters = (props: SearchFiltersProps): JSX.Element => {
  return (
    <div className={`search-filters ${props.className || ''}`}>
      <label>Filter by:</label>
      <div className="search-filters-list">
        {filters.map(({ id, name }) => (
          <SearchFilter
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

export default SearchFilters;
