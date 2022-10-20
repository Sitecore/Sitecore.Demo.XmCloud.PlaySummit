import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as ComposeRefsHook from '@radix-ui/react-compose-refs';
import type { Scope } from '@radix-ui/react-context';
import * as RadixContext from '@radix-ui/react-context';
import type * as Radix from '@radix-ui/react-primitive';
import * as CallbackRefHook from '@radix-ui/react-use-callback-ref';
import React from 'react';

import { createCollectionIndex } from '../../lib/discover/collectionIndex';
import * as FacetValueListPrimitive from './SearchFacetValueListPrimitive';
import { createContextFacetValueListScope } from './SearchFacetValueListPrimitive';

/* -------------------------------------------------------------------------------------------------
 * AccordionFacets
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACETS_NAME = 'AccordionFacets';
type AccordionFacetsElement = React.ElementRef<typeof AccordionPrimitive.Root>;
type AccordionProps = Radix.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

export type FacetValueClickedActionPayload = {
  facetId: string;
  facetValueId: string;
  facetIndex: number;
  facetValueIndex: number;
  checked: boolean;
};

export type FacetValueClickedAction = (payload: FacetValueClickedActionPayload) => void;

interface AccordionFacetsProps
  extends Omit<
    AccordionProps,
    'type' | 'value' | 'defaultValue' | 'defaultChecked' | 'onValueChange'
  > {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  facetTypesExpandedList?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultFacetTypesExpandedList` if you do not need to control the state of an accordion.
   */
  defaultFacetTypesExpandedList?: string[];
  /**
   * The callback that fires when user click on any facet value item.
   */
  onFacetValueClick?: FacetValueClickedAction;

  /**
   * The callback that fires when the state of the accordion changes.
   */
  onFacetTypesExpandedListChange?(value: string[]): void;
}

type AccordionFacetsContextValue = {
  onFacetValueClick: FacetValueClickedAction;
};

// Create collection index to generate facet type index. It will be use when facet value is clicked
const [CollectionIndex, useCollectionIndex, createCollectionIndexScope] =
  createCollectionIndex(ACCORDION_FACETS_NAME);

type ScopedProps<P> = P & { __scopeAccordionFacets?: Scope };
const [createAccordionFacetsContext, createAccordionFacetsScope] = RadixContext.createContextScope(
  ACCORDION_FACETS_NAME,
  [
    AccordionPrimitive.createAccordionScope,
    createCollectionIndexScope,
    createContextFacetValueListScope,
  ]
);
const useAccordionScope = AccordionPrimitive.createAccordionScope();
const useFacetListScope = createContextFacetValueListScope();

// Create Accordion provider to can share onclick function to the childrens
const [AccordionFacetsProvider, useAccordionFacetsContext] =
  createAccordionFacetsContext<AccordionFacetsContextValue>(ACCORDION_FACETS_NAME);

const AccordionFacets: React.FC<AccordionFacetsProps> = React.forwardRef<
  AccordionFacetsElement,
  AccordionFacetsProps
>((props: ScopedProps<AccordionFacetsProps>, forwardedRef) => {
  const {
    __scopeAccordionFacets,
    defaultFacetTypesExpandedList,
    facetTypesExpandedList,
    onFacetTypesExpandedListChange,
    onFacetValueClick = () => {
      console.log('click');
    },
    ...accordionProps
  } = props;
  const accordionScope = useAccordionScope(__scopeAccordionFacets);

  return (
    <CollectionIndex.Provider scope={__scopeAccordionFacets}>
      <AccordionFacetsProvider scope={__scopeAccordionFacets} onFacetValueClick={onFacetValueClick}>
        <CollectionIndex.Slot scope={__scopeAccordionFacets}>
          <AccordionPrimitive.Root
            {...accordionScope}
            defaultValue={defaultFacetTypesExpandedList}
            onValueChange={onFacetTypesExpandedListChange}
            type="multiple"
            ref={forwardedRef}
            value={facetTypesExpandedList}
            {...accordionProps}
          />
        </CollectionIndex.Slot>
      </AccordionFacetsProvider>
    </CollectionIndex.Provider>
  );
});

AccordionFacets.displayName = ACCORDION_FACETS_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionFacet
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACET_NAME = 'AccordionFacet';
interface AccordionFacetItemProps {
  facetId: string;
  children: React.ReactNode;
}
type AccordionFacetContextValue = {
  facetId: string;
  onFacetItemClick: FacetValueListPrimitive.FacetClickedActionHandler;
};
type AccordionFacetElement = React.ElementRef<typeof AccordionPrimitive.Item>;
const [createAccordionFacetContext] = RadixContext.createContextScope(ACCORDION_FACET_NAME);
const [AccordionFacetProvider, useAccordionFacetContext] =
  createAccordionFacetContext<AccordionFacetContextValue>(ACCORDION_FACET_NAME);
/**
 * `AccordionFacet` contains all of the parts of a collapsible section inside of an `Accordion`.
 */
const AccordionFacet = React.forwardRef<AccordionFacetElement, AccordionFacetItemProps>(
  (props: ScopedProps<AccordionFacetItemProps>, forwardedRef) => {
    const { __scopeAccordionFacets, facetId, ...restProps } = props;
    const accordionScope = useAccordionScope(__scopeAccordionFacets);
    const ref = React.useRef<AccordionFacetElement>(null);
    const composedRef = ComposeRefsHook.useComposedRefs(forwardedRef, ref);
    const getIndex = useCollectionIndex(ref, __scopeAccordionFacets);
    const { onFacetValueClick } = useAccordionFacetsContext(
      ACCORDION_FACET_NAME,
      __scopeAccordionFacets
    );
    const onFacetClickHandler =
      CallbackRefHook.useCallbackRef<FacetValueListPrimitive.FacetClickedActionHandler>(
        ({ facetId, facetValueId, facetValueIndex, checked }) => {
          onFacetValueClick({
            facetId,
            facetValueId,
            facetValueIndex,
            facetIndex: getIndex(),
            checked,
          });
        }
      );
    return (
      <AccordionFacetProvider
        scope={__scopeAccordionFacets}
        facetId={facetId}
        onFacetItemClick={onFacetClickHandler}
      >
        <CollectionIndex.ItemSlot scope={__scopeAccordionFacets}>
          <AccordionPrimitive.Item
            {...accordionScope}
            value={facetId}
            {...restProps}
            ref={composedRef}
          />
        </CollectionIndex.ItemSlot>
      </AccordionFacetProvider>
    );
  }
);

AccordionFacet.displayName = ACCORDION_FACET_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetContent
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACET_CONTENT_NAME = 'AccordionFacetContent';
type AccordionFacetContentProps = Radix.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
type AccordionFacetContentElement = React.ElementRef<typeof AccordionPrimitive.Content>;

/**
 * `AccordionFacetContent` contains all of the parts of a collapsible section inside of an `Accordion`.
 */
const AccordionFacetContent = React.forwardRef<
  AccordionFacetContentElement,
  AccordionFacetContentProps
>((props: ScopedProps<AccordionFacetContentProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const accordionScope = useAccordionScope(__scopeAccordionFacets);

  return <AccordionPrimitive.Content {...accordionScope} {...restProps} ref={forwardedRef} />;
});

AccordionFacetContent.displayName = ACCORDION_FACET_CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueList
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACET_VALUE_LIST_NAME = 'AccordionFacetValueList';
type AccordionFacetValueListElement = React.ComponentPropsWithoutRef<
  typeof FacetValueListPrimitive.Root
>;
type AccordionFacetValueListProps = Omit<
  AccordionFacetValueListElement,
  'facetId' | 'onFacetClick'
>;

const AccordionFacetValueList = (props: ScopedProps<AccordionFacetValueListProps>): JSX.Element => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const facetListScope = useFacetListScope(__scopeAccordionFacets);
  const { facetId, onFacetItemClick } = useAccordionFacetContext(
    ACCORDION_FACET_VALUE_LIST_NAME,
    __scopeAccordionFacets
  );

  return (
    <FacetValueListPrimitive.Root
      {...facetListScope}
      {...restProps}
      facetId={facetId}
      onFacetClick={onFacetItemClick}
    />
  );
};

AccordionFacetValueList.displayName = ACCORDION_FACET_VALUE_LIST_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueListItem
 * ----------------------------------------------------------------------------------------------- */
type AccordionFacetValueListItemElement = React.ElementRef<typeof FacetValueListPrimitive.Item>;
type AccordionFacetValueListItemProps = Radix.ComponentPropsWithoutRef<
  typeof FacetValueListPrimitive.Item
>;
const AccordionFacetValueListItem = React.forwardRef<
  AccordionFacetValueListItemElement,
  AccordionFacetValueListItemProps
>((props: ScopedProps<AccordionFacetValueListItemProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const facetListScope = useFacetListScope(__scopeAccordionFacets);

  return <FacetValueListPrimitive.Item {...facetListScope} {...restProps} ref={forwardedRef} />;
});
AccordionFacetValueListItem.displayName = 'AccordionFacetValueListItem';

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueListItemLabel
 * ----------------------------------------------------------------------------------------------- */
type AccordionFacetValueListItemLabelElement = React.ElementRef<
  typeof FacetValueListPrimitive.Label
>;
type AccordionFacetValueListItemLabelProps = Radix.ComponentPropsWithoutRef<
  typeof FacetValueListPrimitive.Label
>;
const AccordionFacetValueListItemLabel = React.forwardRef<
  AccordionFacetValueListItemLabelElement,
  AccordionFacetValueListItemLabelProps
>((props: ScopedProps<AccordionFacetValueListItemLabelProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const facetListScope = useFacetListScope(__scopeAccordionFacets);

  return <FacetValueListPrimitive.Label {...facetListScope} {...restProps} ref={forwardedRef} />;
});
AccordionFacetValueListItemLabel.displayName = 'AccordionFacetValueListItemLabel';

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueListItemCheckbox
 * ----------------------------------------------------------------------------------------------- */
type AccordionFacetValueListItemCheckboxElement = React.ElementRef<
  typeof FacetValueListPrimitive.Checkbox
>;
type AccordionFacetValueListItemCheckboxProps = Radix.ComponentPropsWithoutRef<
  typeof FacetValueListPrimitive.Checkbox
>;
const AccordionFacetValueListItemCheckbox = React.forwardRef<
  AccordionFacetValueListItemCheckboxElement,
  AccordionFacetValueListItemCheckboxProps
>((props: ScopedProps<AccordionFacetValueListItemCheckboxProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const facetListScope = useFacetListScope(__scopeAccordionFacets);

  return <FacetValueListPrimitive.Checkbox {...facetListScope} {...restProps} ref={forwardedRef} />;
});
AccordionFacetValueListItemCheckbox.displayName = 'AccordionFacetValueListItemCheckbox';
/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueListItemCheckboxIndicator
 * ----------------------------------------------------------------------------------------------- */
const AccordionFacetValueListItemCheckboxIndicator = FacetValueListPrimitive.CheckboxIndicator;
AccordionFacetValueListItemCheckboxIndicator.displayName =
  'AccordionFacetValueListItemCheckboxIndicator';

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetValueListItemItemToggle
 * ----------------------------------------------------------------------------------------------- */
type AccordionFacetValueListItemItemToggleElement = React.ElementRef<
  typeof FacetValueListPrimitive.Toggle
>;
type AccordionFacetValueListItemItemToggleProps = Radix.ComponentPropsWithoutRef<
  typeof FacetValueListPrimitive.Toggle
>;
const AccordionFacetValueListItemItemToggle = React.forwardRef<
  AccordionFacetValueListItemItemToggleElement,
  AccordionFacetValueListItemItemToggleProps
>((props: ScopedProps<AccordionFacetValueListItemCheckboxProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const facetListScope = useFacetListScope(__scopeAccordionFacets);

  return <FacetValueListPrimitive.Toggle {...facetListScope} {...restProps} ref={forwardedRef} />;
});
AccordionFacetValueListItemItemToggle.displayName = 'AccordionFacetValueListItemItemToggle';

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetHeader
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACET_HEADER_NAME = 'AccordionFacetHeader';
type AccordionFacetHeaderElement = React.ElementRef<typeof AccordionPrimitive.Header>;
type AccordionFacetHeaderProps = Radix.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>;
const AccordionFacetHeader = React.forwardRef<
  AccordionFacetHeaderElement,
  AccordionFacetHeaderProps
>((props: ScopedProps<AccordionFacetHeaderProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const accordionScope = useAccordionScope(__scopeAccordionFacets);

  return <AccordionPrimitive.Header {...accordionScope} {...restProps} ref={forwardedRef} />;
});
AccordionFacetHeader.displayName = ACCORDION_FACET_HEADER_NAME;

/* -------------------------------------------------------------------------------------------------
 * AccordionFacetTrigger
 * ----------------------------------------------------------------------------------------------- */
const ACCORDION_FACET_TRIGGER_NAME = 'AccordionFacetTrigger';

type AccordionFacetTriggerElement = React.ElementRef<typeof AccordionPrimitive.AccordionTrigger>;
type AccordionFacetTriggerProps = Radix.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.AccordionTrigger
>;
const AccordionFacetTrigger = React.forwardRef<
  AccordionFacetTriggerElement,
  AccordionFacetTriggerProps
>((props: ScopedProps<AccordionFacetTriggerProps>, forwardedRef) => {
  const { __scopeAccordionFacets, ...restProps } = props;
  const accordionScope = useAccordionScope(__scopeAccordionFacets);

  return (
    <AccordionPrimitive.AccordionTrigger {...accordionScope} {...restProps} ref={forwardedRef} />
  );
});

AccordionFacetTrigger.displayName = ACCORDION_FACET_TRIGGER_NAME;

const Root = AccordionFacets;
const Facet = AccordionFacet;
const Header = AccordionFacetHeader;
const Trigger = AccordionFacetTrigger;
const Content = AccordionFacetContent;
const ValueList = AccordionFacetValueList;
const Item = AccordionFacetValueListItem;
const ItemLabel = AccordionFacetValueListItemLabel;
const ItemCheckbox = AccordionFacetValueListItemCheckbox;
const ItemCheckboxIndicator = AccordionFacetValueListItemCheckboxIndicator;
const ItemToggle = AccordionFacetValueListItemItemToggle;
const useAccordionFacetsCollectionIndex = useCollectionIndex;

export {
  createAccordionFacetsContext,
  createAccordionFacetsScope,
  useAccordionFacetsCollectionIndex,
  useAccordionFacetContext,
  useAccordionFacetsContext,
  //
  AccordionFacets,
  AccordionFacet,
  AccordionFacetHeader,
  AccordionFacetTrigger,
  AccordionFacetContent,
  AccordionFacetValueList,
  AccordionFacetValueListItem,
  AccordionFacetValueListItemLabel,
  AccordionFacetValueListItemCheckbox,
  AccordionFacetValueListItemCheckboxIndicator,
  AccordionFacetValueListItemItemToggle,
  //
  Root,
  Facet,
  Header,
  Trigger,
  Content,
  ValueList,
  Item,
  ItemLabel,
  ItemCheckbox,
  ItemCheckboxIndicator,
  ItemToggle,
};
export type { AccordionFacetsProps };
