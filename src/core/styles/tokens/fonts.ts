const fontFamily = '';
const fontWeight = [400, 600];
const fontSize = [11, 12, 13, 15, 16, 17.2, 22, 28, 34, 20];
const lineHeight = [13, 16, 18, 20, 21, 22, 24, 28, 34, 41];

const fonts = {
  caption2: {
    fontFamily,
    fontSize: fontSize[0],
    weight: fontWeight[0],
    lineHeight: lineHeight[0],
  },
  caption1: {
    fontFamily,
    fontSize: fontSize[1],
    weight: fontWeight[0],
    lineHeight: lineHeight[1],
  },
  footnote: {
    fontFamily,
    fontSize: fontSize[2],
    weight: fontWeight[0],
    lineHeight: lineHeight[2],
  },
  subHeadline: {
    fontFamily,
    fontSize: fontSize[3],
    weight: fontWeight[0],
    lineHeight: lineHeight[3],
  },
  callout: {
    fontFamily,
    fontSize: fontSize[4],
    weight: fontWeight[0],
    lineHeight: lineHeight[4],
  },
  body: {
    fontFamily,
    fontSize: fontSize[5],
    weight: fontWeight[0],
    lineHeight: lineHeight[5],
  },
  headline: {
    fontFamily,
    fontSize: fontSize[5],
    weight: fontWeight[1],
    lineHeight: lineHeight[5],
  },
  title3: {
    fontFamily,
    fontSize: fontSize[9],
    weight: fontWeight[0],
    lineHeight: lineHeight[5],
  },
  title2: {
    fontFamily,
    fontSize: fontSize[6],
    weight: fontWeight[0],
    lineHeight: lineHeight[6],
  },
  title1: {
    fontFamily,
    fontSize: fontSize[7],
    weight: fontWeight[0],
    lineHeight: lineHeight[8],
  },
  largeTitle: {
    fontFamily,
    fontSize: fontSize[8],
    weight: fontWeight[0],
    lineHeight: lineHeight[9],
  },
};

export {fontFamily, fontWeight, fontSize, lineHeight};

export default fonts;
