import { faCheck, faChevronDown, faSlidersH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccordionFacets, SearchResultsAccordionFacets, FacetItem } from '@sitecore-search/ui';
import {
  FacetChangedPayload,
  SearchResponseFacet,
  SearchResponseFacetItem,
} from '@sitecore-search/react';
import { SearchResultsSelectedFilters } from '@sitecore-search/react/dist/types/widgets/searchResults/hooks/useSearchResultsSelectedFilters';

export type SearchFacetsProps = {
  facets: SearchResponseFacet[];
  onFacetValueClick: (payload: FacetChangedPayload) => void;
  selectedFacets?: SearchResultsSelectedFilters;
  onRemoveFilter?: (facet: unknown) => void;
  onClearFilters?: () => void;
  className?: string;
};

const getFacetLabel = ({ text }: SearchResponseFacetItem): string => {
  if (text === 'true') {
    return 'yes';
  }
  if (text === 'false') {
    return 'no';
  }
  return text;
};

const SearchFacets = (props: SearchFacetsProps): JSX.Element => {
  return (
    <>
      {props.selectedFacets?.length > 0 && (
        <div className="search-facets-active">
          <div className="search-facets-active-title">
            <FontAwesomeIcon icon={faSlidersH} />
            <span>Active filters</span>
          </div>
          <ul className="search-facets-filters-list">
            {props.selectedFacets?.map((selectedFacet) => (
              <li
                key={`${selectedFacet.facetId}${selectedFacet.facetLabel}${selectedFacet.valueLabel}`}
                className="search-facets-filters-list-item"
              >
                <p className="search-facets-filters-list-item-text">
                  {selectedFacet.facetLabel}: {selectedFacet.valueLabel}
                </p>
                <button
                  onClick={() => props.onRemoveFilter(selectedFacet)}
                  className="search-facets-filters-list-item-button"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))}
          </ul>
          <button
            className={`btn-secondary search-facets-clear ${props.className || ''}`}
            onClick={props.onClearFilters}
          >
            Clear All
          </button>
        </div>
      )}
      <SearchResultsAccordionFacets
        onFacetValueClick={props.onFacetValueClick}
        className="search-facets-root"
      >
        {props.facets?.map((f) => (
          <AccordionFacets.Facet facetId={f.name} className="search-facets-root-facet" key={f.name}>
            <AccordionFacets.Header className="search-facets-root-facet-header">
              <AccordionFacets.Trigger className="search-facets-root-facet-trigger">
                {f.label}
                <FontAwesomeIcon icon={faChevronDown} />
              </AccordionFacets.Trigger>
            </AccordionFacets.Header>
            <AccordionFacets.Content className="search-facets-root-facet-content">
              <AccordionFacets.ValueList className="search-facets-root-facet-list">
                {f.value?.map((v, index) => (
                  <FacetItem
                    key={v.id}
                    {...{ index, facetValueId: v.id }}
                    className="search-facets-root-facet-item"
                  >
                    <AccordionFacets.ItemCheckbox className="search-facets-root-facet-checkbox">
                      <AccordionFacets.ItemCheckboxIndicator className="search-facets-root-facet-checkbox-indicator">
                        <FontAwesomeIcon icon={faCheck} />
                      </AccordionFacets.ItemCheckboxIndicator>
                    </AccordionFacets.ItemCheckbox>
                    <AccordionFacets.ItemLabel className="search-facets-root-facet-checkbox-label">
                      {getFacetLabel(v)} {v.count && `(${v.count})`}
                    </AccordionFacets.ItemLabel>
                  </FacetItem>
                ))}
              </AccordionFacets.ValueList>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
        ))}
      </SearchResultsAccordionFacets>
    </>
  );
};

export default SearchFacets;
