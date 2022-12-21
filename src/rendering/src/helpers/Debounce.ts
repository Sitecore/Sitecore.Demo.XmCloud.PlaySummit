export default function debounce(
  func: (arg: string) => void,
  wait: number,
  immediate: boolean
): () => void {
  let timeout: NodeJS.Timeout;

  return function returnFn(this: unknown, ...rest: unknown[]) {
    const args = rest;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
}

type AsyncFunction<Result> = (...args: unknown[]) => Promise<Result>;

export const debounceAsync = <Result>(
  fn: AsyncFunction<Result>,
  wait: number
): AsyncFunction<Result> => {
  let timeoutId: NodeJS.Timeout | undefined;

  return function (...args: unknown[]): Promise<Result> {
    clearTimeout(timeoutId);

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        fn(...args)
          .then(resolve)
          .catch(reject);
      }, wait);
    });
  };
};
