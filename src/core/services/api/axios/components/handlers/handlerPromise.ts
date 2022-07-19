import { trackPromise } from 'react-promise-tracker';

export function handlePromise<T>(promise: Promise<T>, reference: string) {
  if (reference) return trackPromise(promise, reference);
  return trackPromise(promise);
}
