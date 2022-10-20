import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as UseComposedRef from '@radix-ui/react-compose-refs';
import * as RadixContext from '@radix-ui/react-context';
import * as LabelPrimitive from '@radix-ui/react-label';
import type * as Radix from '@radix-ui/react-primitive';
import * as RadixPrimitive from '@radix-ui/react-primitive';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as CallbackRefHook from '@radix-ui/react-use-callback-ref';
import * as ControllableState from '@radix-ui/react-use-controllable-state';
import React from 'react';

import { createCollectionIndex } from '../../lib/discover/collectionIndex';

/**
 * TODO: Add see more/less logic
 */

/* -------------------------------------------------------------------------------------------------
 * FacetValueList
 * ----------------------------------------------------------------------------------------------- */
const FACET_VALUE_LIST_NAME = 'FacetValueList';

type Orientation = 'vertical' | 'horizontal';

type PrimitiveUlProps = Radix.ComponentPropsWithoutRef<typeof RadixPrimitive.Primitive.ul>;
type Element = React.ElementRef<typeof RadixPrimitive.Primitive.ul>;

/**
 * Used in FacetValueList
 */
export type FacetClickedActionHandlerPayload = {
  checked: boolean;
  facetId: string;
  facetValueId: string;
  facetValueIndex: number;
};
export type FacetClickedActionHandler = (payload: FacetClickedActionHandlerPayload) => void;

export interface FacetValueListProps extends PrimitiveUlProps {
  /**
   * The id of the facet who will render the facet value items
   */
  facetId: string;
  /** Event handler called when any facet value item is clicked. */
  onFacetClick: FacetClickedActionHandler;
  /**
   * The orientation of the item list.
   * Either `vertical` or `horizontal`. Defaults to `vertical`
   */
  orientation?: Orientation;
}

type FacetValueListContextValue = {
  onFacetClick?: FacetClickedActionHandler;
  facetId: string;
};

type ScopedProps<P> = P & { __scopeFacetValueList?: RadixContext.Scope };
const [CollectionIndex, useCollectionIndex, createCollectionIndexScope] =
  createCollectionIndex(FACET_VALUE_LIST_NAME);

const FACET_VALUE_ITEM_NAME = 'FacetValueListItem';

const [createFacetItemContext, createContextFacetItemScope] =
  RadixContext.createContextScope(FACET_VALUE_ITEM_NAME);
const [createFacetValueListContext, createContextFacetValueListScope] =
  RadixContext.createContextScope(FACET_VALUE_LIST_NAME, [
    createCollectionIndexScope,
    createContextFacetItemScope,
  ]);
const [FacetValueListProvider, useFacetValueListContext] =
  createFacetValueListContext<FacetValueListContextValue>(FACET_VALUE_LIST_NAME);

const FacetValueList = React.forwardRef<Element, FacetValueListProps>(
  (
    {
      __scopeFacetValueList,
      facetId,
      onFacetClick,
      orientation = 'vertical',
      ...props
    }: ScopedProps<FacetValueListProps>,
    forwardedRef
  ) => {
    return (
      <CollectionIndex.Provider scope={__scopeFacetValueList}>
        <FacetValueListProvider
          scope={__scopeFacetValueList}
          onFacetClick={onFacetClick}
          facetId={facetId}
        >
          <CollectionIndex.Slot scope={__scopeFacetValueList}>
            <RadixPrimitive.Primitive.ul
              data-orientation={orientation}
              {...props}
              ref={forwardedRef}
            />
          </CollectionIndex.Slot>
        </FacetValueListProvider>
      </CollectionIndex.Provider>
    );
  }
);

FacetValueList.displayName = FACET_VALUE_LIST_NAME;
const Root = FacetValueList;

/* -------------------------------------------------------------------------------------------------
 * FacetValueListItem
 * ----------------------------------------------------------------------------------------------- */

type FacetValueListItemContextValue = {
  onFacetItemChange: (selected: boolean) => void;
  selected: boolean;
  id: string;
};
const [FacetValueListItemProvider, useFacetValueListItemContext] =
  createFacetItemContext<FacetValueListItemContextValue>(FACET_VALUE_ITEM_NAME);

type PrimitiveLiProps = Radix.ComponentPropsWithoutRef<typeof RadixPrimitive.Primitive.li>;
type FacetItemElement = React.ElementRef<typeof RadixPrimitive.Primitive.li>;
export interface FacetValueListItemProps extends PrimitiveLiProps {
  facetValueId: string;
  selected?: boolean;
  defaultSelected?: boolean;
}
/**
 * This component should be use inside FacetValueList
 */
const FacetValueListItem = React.forwardRef<FacetItemElement, FacetValueListItemProps>(
  (props: ScopedProps<FacetValueListItemProps>, forwardedRef) => {
    const {
      __scopeFacetValueList,
      defaultSelected,
      facetValueId,
      selected: selectedProp,
      ...facetItemProps
    } = props;

    const {
      facetId,
      onFacetClick = () => {
        console.log('click');
      },
    } = useFacetValueListContext(FACET_VALUE_ITEM_NAME, __scopeFacetValueList);
    const ref = React.useRef<FacetItemElement>(null);
    const composedRef = UseComposedRef.useComposedRefs(forwardedRef, ref);
    const getIndex = useCollectionIndex(ref, __scopeFacetValueList);

    const onFacetItemClickHandler = CallbackRefHook.useCallbackRef<
      FacetValueListItemContextValue['onFacetItemChange']
    >((selected: boolean) => {
      onFacetClick({
        facetId,
        facetValueId,
        facetValueIndex: getIndex(),
        checked: selected,
      });
    });

    const [selected = false, setChecked] = ControllableState.useControllableState({
      prop: selectedProp,
      defaultProp: defaultSelected,
      onChange: onFacetItemClickHandler,
    });

    return (
      <FacetValueListItemProvider
        scope={__scopeFacetValueList}
        onFacetItemChange={setChecked}
        selected={selected}
        id={facetValueId}
      >
        <CollectionIndex.ItemSlot scope={__scopeFacetValueList}>
          <RadixPrimitive.Primitive.li
            data-state={selected ? 'selected' : 'unselected'}
            ref={composedRef}
            {...facetItemProps}
          />
        </CollectionIndex.ItemSlot>
      </FacetValueListItemProvider>
    );
  }
);

FacetValueListItem.displayName = FACET_VALUE_ITEM_NAME;

type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof RadixPrimitive.Primitive.button>;

/* -------------------------------------------------------------------------------------------------
 * FacetValueListItemLabel
 * ----------------------------------------------------------------------------------------------- */
/**
 * This component should be use inside FacetItem
 */
const FACET_VALUE_ITEM_LABEL_NAME = 'FacetValueListItemLabel';
type FacetItemLabelElement = React.ElementRef<typeof LabelPrimitive.Root>;

const FacetValueListItemLabel = React.forwardRef<FacetItemLabelElement, LabelPrimitive.LabelProps>(
  (props: ScopedProps<LabelPrimitive.LabelProps>, forwardedRef) => {
    const { __scopeFacetValueList, ...labelProps } = props;
    const { id } = useFacetValueListItemContext(FACET_VALUE_ITEM_LABEL_NAME, __scopeFacetValueList);

    return <LabelPrimitive.Root htmlFor={id} {...labelProps} ref={forwardedRef} />;
  }
);

FacetValueListItemLabel.displayName = FACET_VALUE_ITEM_LABEL_NAME;

/* -------------------------------------------------------------------------------------------------
 * FacetValueListItemCheckbox
 * ----------------------------------------------------------------------------------------------- */
/**
 * This component should be use inside FacetItem
 */
const FACET_VALUE_ITEM_CHECKBOX_NAME = 'FacetValueListItemCheckbox';
type FacetValueListItemCheckboxElement = React.ElementRef<typeof RadixPrimitive.Primitive.button>;
type PrimitiveFacetValueListItemCheckboxProps = Omit<
  PrimitiveButtonProps,
  'checked' | 'defaultChecked' | 'disabled'
>;

const FacetValueListItemCheckbox = React.forwardRef<
  FacetValueListItemCheckboxElement,
  PrimitiveFacetValueListItemCheckboxProps
>((props: ScopedProps<PrimitiveFacetValueListItemCheckboxProps>, forwardedRef) => {
  const { __scopeFacetValueList, ...checkboxProps } = props;
  const { id, selected, onFacetItemChange } = useFacetValueListItemContext(
    FACET_VALUE_ITEM_CHECKBOX_NAME,
    __scopeFacetValueList
  );

  return (
    <CheckboxPrimitive.Root
      checked={selected}
      id={id}
      onCheckedChange={onFacetItemChange}
      ref={forwardedRef}
      {...checkboxProps}
    />
  );
});

FacetValueListItemCheckbox.displayName = FACET_VALUE_ITEM_CHECKBOX_NAME;

/* -------------------------------------------------------------------------------------------------
 * FacetValueListItemCheckboxIndicator
 * ----------------------------------------------------------------------------------------------- */
/**
 * This component should contain the icon to be displayed for the checkbox when it is checked
 */
const FacetValueListItemCheckboxIndicator = CheckboxPrimitive.Indicator;
FacetValueListItemCheckboxIndicator.displayName = 'FacetValueListItemCheckboxIndicator';

/* -------------------------------------------------------------------------------------------------
 * FacetItemToggle
 * ----------------------------------------------------------------------------------------------- */
/**
 * This component should be use inside FacetValueListItem
 */
const FACET_VALUE_ITEM_TOGGLE_NAME = 'FacetValueListItemToggle';

type FacetValueListItemToggleElement = React.ElementRef<typeof RadixPrimitive.Primitive.button>;
type PrimitiveFacetValueListItemToggleProps = Omit<
  PrimitiveButtonProps,
  'checked' | 'defaultChecked' | 'disabled'
>;

const FacetValueListItemToggle = React.forwardRef<
  FacetValueListItemToggleElement,
  PrimitiveFacetValueListItemToggleProps
>((props: ScopedProps<PrimitiveFacetValueListItemToggleProps>, forwardedRef) => {
  const { __scopeFacetValueList, ...toggleProps } = props;
  const { id, selected, onFacetItemChange } = useFacetValueListItemContext(
    FACET_VALUE_ITEM_TOGGLE_NAME,
    __scopeFacetValueList
  );

  return (
    <TogglePrimitive.Root
      pressed={selected}
      id={id}
      onPressedChange={onFacetItemChange}
      ref={forwardedRef}
      {...toggleProps}
    />
  );
});

FacetValueListItemToggle.displayName = FACET_VALUE_ITEM_TOGGLE_NAME;

const Item = FacetValueListItem;
const Checkbox = FacetValueListItemCheckbox;
const CheckboxIndicator = FacetValueListItemCheckboxIndicator;
const Label = FacetValueListItemLabel;
const Toggle = FacetValueListItemToggle;

export {
  createContextFacetValueListScope,
  createContextFacetItemScope,
  //
  FacetValueList,
  FacetValueListItem,
  FacetValueListItemLabel,
  FacetValueListItemCheckbox,
  FacetValueListItemCheckboxIndicator,
  FacetValueListItemToggle,
  //
  Root,
  Item,
  Label,
  Checkbox,
  CheckboxIndicator,
  Toggle,
};
