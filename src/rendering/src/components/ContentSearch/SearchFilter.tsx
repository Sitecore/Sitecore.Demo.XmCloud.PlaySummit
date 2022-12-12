export type Option = {
  value: string;
  label: string;
};

type SearchFilterProps = {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Option[];
};

const SearchFilter = (props: SearchFilterProps): JSX.Element => {
  const { options = [] } = props;

  return (
    <select
      className="search-filter"
      name={props.name}
      onChange={(e) => e.target.value !== props.value && props.onChange(e.target.value)}
      value={props.value}
    >
      <option value="">Select {props.name}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SearchFilter;
