const label = {
  labelFontSize: {
    lg: 18,
    md: 16,
    sm: 14,
  },
  labelLineHeight: {
    lg: 28,
    md: 24,
    sm: 20,
  },
  labelFontWeight: "600" as any,
};

const body = {
  bodyFontSize: {
    lg: 16,
    md: 14,
    sm: 12,
  },
  bodyLineHeight: {
    lg: 24,
    md: 20,
    sm: 16,
  },
  bodyFontWeight: "500" as any,
};

const title = {
  titleFontSize: {
    lg: 20,
    md: 16,
    sm: 14,
  },
  titleLineHeight: {
    lg: 28,
    md: 24,
    sm: 20,
  },
  titleFontWeight: "700" as any,
};

const heading = {
  headingFontSize: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
  },
  headingLineHeight: {
    h1: 52,
    h2: 40,
    h3: 36,
    h4: 32,
    h5: 28,
    h6: 24,
  },
  headingFontWeight: "700" as any,
};

export const Typograhpy = {
  ...body,
  ...heading,
  ...label,
  ...title,
};
