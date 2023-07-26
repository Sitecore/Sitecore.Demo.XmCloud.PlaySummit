export interface DiscoverReference {
  current: { contains: (eventTarget: EventTarget) => boolean };
}
