import α from 'color-alpha';

export default function createAlpha(color: string, opacity: number) {
  return α(color, opacity);
}
