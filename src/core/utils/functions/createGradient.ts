import tinygradient from 'tinygradient';

export default function createGradient(...props: string[]) {
  return tinygradient(props).css();
}
