import Color from 'color';

export default function createAlpha(color: string, opacity: number) {
  return Color(color).alpha(opacity).hexa();
}
