import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckIcon } from '@radix-ui/react-icons';
import { AccordionFacets } from '@sitecore-discover/ui';

export type FacetValueClickedActionPayload = {
  facetId: string;
  facetValueId: string;
  facetIndex: number;
  facetValueIndex: number;
  checked: boolean;
};

export type FacetValue = {
  id: string;
  text: string;
  count: number;
};

export type Facet = {
  label: string;
  value: FacetValue[];
};

export type Filter = {
  facetId: string;
  facetValueId: string;
};

export type FacetsProps = {
  onFacetValueClick?: (payload: FacetValueClickedActionPayload) => void;
  onClearFilters?: () => void;
  onFilterClick?: (payload: Filter & { checked: boolean }) => void;
  facets: Record<string, Facet>;
  filters: Filter[];
  className?: string;
};

const Facets = (props: FacetsProps): JSX.Element => {
  const facetNames = Object.keys(props.facets);
  return (
    <>
      {props.filters.length > 0 && (
        <button
          className={`search-facets-clear ${props.className || ''}`}
          onClick={props.onClearFilters}
        >
          Clear Filters
        </button>
      )}
      <ul className="search-facets-filters-list">
        {props.filters.map(({ facetId, facetValueId }) =>
          props.facets[facetId]?.value
            .filter(({ id }) => id === facetValueId)
            .map((v) => (
              <li key={`${facetId}@${facetValueId}`} className="search-facets-filters-list-item">
                <span className="search-facets-filters-list-item-text">
                  <span>{props.facets[facetId]?.label}</span>: {v.text}
                </span>
                <button
                  className="search-facets-filters-list-item-button"
                  onClick={() => props.onFilterClick({ facetId, facetValueId, checked: false })}
                >
                  X
                </button>
              </li>
            ))
        )}
      </ul>
      <AccordionFacets.Root
        className="search-facets-root"
        defaultFacetTypesExpandedList={[]}
        onFacetValueClick={props.onFacetValueClick}
      >
        {facetNames.map((f) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <AccordionFacets.Facet className="search-facets-root-facet" key={f} facetId={f}>
            <AccordionFacets.Header className="search-facets-root-facet-header">
              <AccordionFacets.Trigger className="search-facets-root-facet-trigger">
                {props.facets[f].label}
              </AccordionFacets.Trigger>
              <FontAwesomeIcon icon={faChevronDown} />
            </AccordionFacets.Header>
            <AccordionFacets.Content className="search-facets-root-facet-content">
              <AccordionFacets.ValueList className="search-facets-root-facet-list">
                {props.facets[f].value.map((v, index) => (
                  <AccordionFacets.Item
                    className="search-facets-root-facet-item"
                    key={v.id}
                    selected={
                      !!props.filters.find(
                        ({ facetId: fId, facetValueId: fvId }) => fId === f && fvId === v.id
                      )
                    }
                    {...{ index, facetValueId: v.id }}
                  >
                    <AccordionFacets.ItemCheckbox className="search-facets-root-facet-checkbox">
                      <AccordionFacets.ItemCheckboxIndicator className="search-facets-root-facet-checkbox-indicator">
                        <CheckIcon />
                      </AccordionFacets.ItemCheckboxIndicator>
                    </AccordionFacets.ItemCheckbox>
                    <AccordionFacets.ItemLabel className="search-facets-root-facet-checkbox-label">
                      {v.text} {v.count && `(${v.count})`}
                    </AccordionFacets.ItemLabel>
                  </AccordionFacets.Item>
                ))}
              </AccordionFacets.ValueList>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
        ))}
      </AccordionFacets.Root>
    </>
  );
};

export default Facets;
