const xs = 5.5;
const sm = 11;
const md = 22;
const xl = 44;
const xxl = 88;

const spacing = {
  margin: {
    xs,
    sm,
    md,
    xl,
    xxl,
  },
  padding: {
    xs,
    sm,
    md,
    xl,
    xxl,
  },
  borderRadius: {
    xs,
    sm,
    md,
    xl,
    xxl,
    pill: 10000,
  },
};

export interface PropsSpacing {
  margin: keyof typeof spacing.margin | number;
  padding: keyof typeof spacing.padding | number;
  borderRadius: keyof typeof spacing.borderRadius;
}
export default spacing;
