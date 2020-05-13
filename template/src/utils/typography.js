const SIZE = {
  verySmall: '10px',
  small: '12px',
  regular: '14px',
  big: '16px',
  veryBig: '18px',
  huge: '20px',
  veryHuge: '26px'
};

const WEIGHT = {
  bold: 'bold',
  regular: '500'
};

const typography = {
  verySmallLabel: {
    weight: WEIGHT.regular,
    size: SIZE.verySmall
  },
  verySmallLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.verySmall
  },
  smallLabel: {
    weight: WEIGHT.regular,
    size: SIZE.small
  },
  smallLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.small
  },
  regularLabel: {
    weight: WEIGHT.regular,
    size: SIZE.regular
  },
  regularLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.regular
  },
  defaultLabel: {
    weight: WEIGHT.regular,
    size: SIZE.big
  },
  defaultLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.big
  },
  mediumLabel: {
    weight: WEIGHT.regular,
    size: SIZE.veryBig
  },
  mediumLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.veryBig
  },
  bigLabel: {
    weight: WEIGHT.regular,
    size: SIZE.huge
  },
  bigLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.huge
  },
  hugeLabel: {
    weight: WEIGHT.regular,
    size: SIZE.veryHuge
  },
  hugeLabelBold: {
    weight: WEIGHT.bold,
    size: SIZE.veryHuge
  }
};

export default typography;
