import * as CollectionPrimitive from '@radix-ui/react-collection';
import type { RefObject } from 'react';
import React from 'react';

// eslint-disable-next-line
function createCollectionIndex<ItemElement extends HTMLElement>(name: string): any {
  const COLLECTION_INDEX_NAME = name + 'CollectionIndex';
  const [Collection, useCollection, createCollectionScope] =
    CollectionPrimitive.createCollection<ItemElement>(COLLECTION_INDEX_NAME);

  /* -----------------------------------------------------------------------------------------------
   * useCollectionIndex
   * --------------------------------------------------------------------------------------------- */

  // eslint-disable-next-line
  function useCollectionIndex(currentRef: RefObject<ItemElement>, scope: any) {
    const getItems = useCollection(scope);
    return React.useCallback(() => {
      return getItems().findIndex(({ ref }) => ref.current === currentRef.current);
    }, [getItems, currentRef]);
  }

  return [Collection, useCollectionIndex, createCollectionScope] as const;
}

export { createCollectionIndex };
