import { faCheck, faChevronDown, faSlidersH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { FacetValueClickedActionPayload } from '../../interfaces/contentSearch/FacetValueClickedActionPayload';
import { SearchContext } from './SearchProvider';
import { AccordionFacets } from '@sitecore-discover/ui';
import { ContentSearchRequestFilter } from '../../services/ContentSearchService';

type FacetValue = {
  id: string;
  text: string;
  count: number;
};

type Facet = {
  name: string;
  label: string;
  value: FacetValue[];
};

export type SearchFacetsProps = {
  onFacetValueClick?: (payload: FacetValueClickedActionPayload) => void;
  onClearFilters?: () => void;
  onFilterClick?: (payload: ContentSearchRequestFilter & { checked: boolean }) => void;
  facets: Facet[];
  filters: ContentSearchRequestFilter[];
  className?: string;
};

const getFacetLabel = ({ text }: FacetValue): string => {
  if (text === 'true') {
    return 'yes';
  }
  if (text === 'false') {
    return 'no';
  }
  return text;
};

const SearchFacets = (props: SearchFacetsProps): JSX.Element => {
  const { filters } = useContext(SearchContext);
  const filterIds = filters.map(({ facetId }) => facetId);
  const appliedFilters = props.filters.filter(({ facetId }) => !filterIds.includes(facetId));
  const facetsMap = Object.fromEntries(props.facets.map((facet) => [facet.name, facet]));

  return (
    <>
      {appliedFilters.length > 0 && (
        <div className="search-facets-active">
          <div className="search-facets-active-title">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Active filters</span>
          </div>
          <ul className="search-facets-filters-list">
            {appliedFilters.map(({ facetId, facetValueId }) =>
              facetsMap[facetId]?.value
                .filter(({ id }) => id === facetValueId)
                .map((v) => (
                  <li
                    key={`${facetId}@${facetValueId}`}
                    className="search-facets-filters-list-item"
                  >
                    <span className="search-facets-filters-list-item-text">
                      <span>{facetsMap[facetId]?.label}</span>: {getFacetLabel(v)}
                    </span>
                    <button
                      className="search-facets-filters-list-item-button"
                      onClick={() => props.onFilterClick({ facetId, facetValueId, checked: false })}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </li>
                ))
            )}
          </ul>
          <button
            className={`btn-secondary search-facets-clear ${props.className || ''}`}
            onClick={props.onClearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}
      <AccordionFacets.Root
        className="search-facets-root"
        onFacetValueClick={props.onFacetValueClick}
      >
        {props.facets.map((f) => (
          <div className="search-facets-root-facet" key={f.name}>
            <AccordionFacets.Facet facetId={f.name}>
              <AccordionFacets.Header className="search-facets-root-facet-header">
                <AccordionFacets.Trigger className="search-facets-root-facet-trigger">
                  {f.label}
                </AccordionFacets.Trigger>
                <FontAwesomeIcon icon={faChevronDown} />
              </AccordionFacets.Header>
              <AccordionFacets.Content className="search-facets-root-facet-content">
                <AccordionFacets.ValueList className="search-facets-root-facet-list">
                  {f.value.map((v, index) => (
                    <AccordionFacets.Item
                      className="search-facets-root-facet-item"
                      key={v.id}
                      selected={
                        !!props.filters.find(
                          ({ facetId: fId, facetValueId: fvId }) => fId === f.name && fvId === v.id
                        )
                      }
                      {...{ index, facetValueId: v.id }}
                    >
                      <AccordionFacets.ItemCheckbox className="search-facets-root-facet-checkbox">
                        <AccordionFacets.ItemCheckboxIndicator className="search-facets-root-facet-checkbox-indicator">
                          <FontAwesomeIcon icon={faCheck} />
                        </AccordionFacets.ItemCheckboxIndicator>
                      </AccordionFacets.ItemCheckbox>
                      <AccordionFacets.ItemLabel className="search-facets-root-facet-checkbox-label">
                        {getFacetLabel(v)} {v.count && `(${v.count})`}
                      </AccordionFacets.ItemLabel>
                    </AccordionFacets.Item>
                  ))}
                </AccordionFacets.ValueList>
              </AccordionFacets.Content>
            </AccordionFacets.Facet>
          </div>
        ))}
      </AccordionFacets.Root>
    </>
  );
};

export default SearchFacets;
