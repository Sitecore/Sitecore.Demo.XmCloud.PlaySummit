export interface DiscoverReference {
  current: { contains: (eventTarget: EventTarget) => boolean };
}

type DiscoverServiceOptions = {
  isStorybook?: boolean;
};

export const DiscoverService = (options?: DiscoverServiceOptions): void => {
  const DISCOVER_CUSTOMER_KEY = options?.isStorybook
    ? '0-0'
    : process.env.NEXT_PUBLIC_DISCOVER_CUSTOMER_KEY || '';
  const DISCOVER_API_KEY = options?.isStorybook
    ? '0-0-0'
    : process.env.NEXT_PUBLIC_DISCOVER_API_KEY || '';

  if (typeof window === 'undefined' || !DISCOVER_CUSTOMER_KEY || !DISCOVER_API_KEY) {
    return;
  }
};
