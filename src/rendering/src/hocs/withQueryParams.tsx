import { useRouter } from 'next/router';
import { ComponentType } from 'react';

type WithQueryParamsProps = {
  [key in string]: unknown;
};

const withQueryParams = <T extends WithQueryParamsProps = WithQueryParamsProps>(
  WrappedComponent: ComponentType<T>,
  params: string[]
): ComponentType => {
  const ComponentWithQueryParams = (props: T): JSX.Element => {
    const { query, isReady } = useRouter();

    if (!isReady) {
      return null;
    }

    return (
      <WrappedComponent
        {...props}
        {...params.reduce(
          (mem, param) => ({ ...mem, [param]: (query[param] || '').toString() }),
          {}
        )}
      />
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithQueryParams.displayName = `withQueryParams(${displayName})`;

  return ComponentWithQueryParams;
};

export default withQueryParams;
