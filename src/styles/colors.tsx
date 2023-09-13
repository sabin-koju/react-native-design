const colorPrimitives = {
  // brand
  primary50: "255, 237, 231",
  primary100: "254, 200, 179",
  primary200: "253, 173, 143",
  primary300: "252, 135, 92",
  primary400: "252, 112, 60",
  primary500: "251, 76, 11",
  primary600: "228, 69, 10",
  primary700: "178, 54, 8",
  primary800: "138, 42, 6",
  primary900: "105, 32, 5",

  // accent
  accent50: "236, 234, 249",
  accent100: "196, 191, 235",
  accent200: "168, 160, 226",
  accent300: "128, 117, 212",
  accent400: "104, 90, 204",
  accent500: "66, 49, 191",
  accent600: "60, 45, 174",
  accent700: "47, 35, 136",
  accent800: "36, 27, 105",
  accent900: "28, 21, 80",

  // gray
  gray50: "234, 233, 233",
  gray100: "190, 187, 186",
  gray200: "158, 154, 153",
  gray300: "114, 108, 106",
  gray400: "86, 80, 77",
  gray500: "64, 52, 48",
  gray600: "40, 33, 30",
  gray700: "31, 26, 23",
  gray800: "24, 20, 18",
  gray900: "18, 15, 14",

  // neutral
  black: "0, 0, 0",
  white: "255, 255, 255",

  // status colors
  info50: "231, 240, 246",
  info100: "181, 207, 226",
  info200: "146, 184, 212",
  info300: "96, 152, 192",
  info400: "65, 132, 180",
  info500: "17, 101, 161",
  info600: "15, 92, 147",
  info700: "12, 72, 114",
  info800: "9, 56, 89",
  info900: "7, 42, 68",

  success50: "230, 247, 239",
  success100: "178, 230, 206",
  success200: "140, 217, 183",
  success300: "88, 200, 150",
  success400: "55, 189, 129",
  success500: "5, 173, 98",
  success600: "5, 157, 89",
  success700: "4, 123, 70",
  success800: "3, 95, 54",
  success900: "2, 73, 41",

  warning50: "255, 244, 231",
  warning100: "254, 222, 179",
  warning200: "253, 205, 142",
  warning300: "252, 183, 91",
  warning400: "252, 169, 59",
  warning500: "251, 147, 10",
  warning600: "228, 134, 9",
  warning700: "178, 104, 7",
  warning800: "138, 81, 6",
  warning900: "105, 62, 4",

  danger50: "255, 233, 231",
  danger100: "254, 188, 180",
  danger200: "253, 156, 143",
  danger300: "252, 110, 92",
  danger400: "252, 82, 61",
  danger500: "251, 39, 12",
  danger600: "228, 35, 11",
  danger700: "178, 28, 9",
  danger800: "138, 21, 7",
  danger900: "105, 16, 5",
};

// neutral
const neutralColors = {
  white: `rgba(${colorPrimitives.white} / 1.0)`,
  black: `rgba(${colorPrimitives.black} / 1.0)`,
};

// surface
const surfaceLight = {
  surfaceBase: "#FDF8F7",
  surface100: "#FFFFFF",
  surface200: "#f8f0ed",
  surface300: "#ede4e0",
};

const surfaceDark = {
  surfaceBase: "#040404",
  surface100: "#0F0C0B",
  surface200: "#161110",
  surface300: "#1b1614",
};

// border
const borderLight = {
  border100: `rgba(${colorPrimitives.gray50}/ 1.0)`,
  border200: `rgba(${colorPrimitives.gray100}/ 1.0)`,
  borderPrimary: `rgba(${colorPrimitives.primary500}/ 1.0)`,
  borderAccent: `rgba(${colorPrimitives.accent500}/ 1.0)`,
  borderInfo: `rgba(${colorPrimitives.info500}/ 1.0)`,
  borderSuccess: `rgba(${colorPrimitives.success500}/ 1.0)`,
  borderWarning: `rgba(${colorPrimitives.warning500}/ 1.0)`,
  borderDanger: `rgba(${colorPrimitives.danger500}/ 1.0)`,
};

const borderDark = {
  border100: `rgba(${colorPrimitives.gray500}/ 1.0)`,
  border200: `rgba(${colorPrimitives.gray400}/ 1.0)`,
  borderPrimary: `rgba(${colorPrimitives.primary500}/ 1.0)`,
  borderAccent: `rgba(${colorPrimitives.accent300}/ 1.0)`,
  borderInfo: `rgba(${colorPrimitives.info300}/ 1.0)`,
  borderSuccess: `rgba(${colorPrimitives.success300}/ 1.0)`,
  borderWarning: `rgba(${colorPrimitives.warning300}/ 1.0)`,
  borderDanger: `rgba(${colorPrimitives.danger300}/ 1.0)`,
};

// text
const textLight = {
  text100: `rgba(${colorPrimitives.gray900}/ 1.0)`,
  text200: `rgba(${colorPrimitives.gray700}/ 1.0)`,
  text300: `rgba(${colorPrimitives.gray400}/ 1.0)`,
  textPrimary: `rgba(${colorPrimitives.primary500}/ 1.0)`,
  textAccent: `rgba(${colorPrimitives.accent700}/ 1.0)`,
  textInfo: `rgba(${colorPrimitives.info700}/ 1.0)`,
  textSuccess: `rgba(${colorPrimitives.success700}/ 1.0)`,
  textWarning: `rgba(${colorPrimitives.warning700}/ 1.0)`,
  textDanger: `rgba(${colorPrimitives.danger700}/ 1.0)`,
};

const textDark = {
  text100: `rgba(${colorPrimitives.white} /1.0)`,
  text200: `rgba(${colorPrimitives.gray50}/ 1.0)`,
  text300: `rgba(${colorPrimitives.gray100}/ 1.0)`,
  textPrimary: `rgba(${colorPrimitives.primary500}/ 1.0)`,
  textAccent: `rgba(${colorPrimitives.accent300}/ 1.0)`,
  textInfo: `rgba(${colorPrimitives.info300}/ 1.0)`,
  textSuccess: `rgba(${colorPrimitives.success300}/ 1.0)`,
  textWarning: `rgba(${colorPrimitives.warning300}/ 1.0)`,
  textDanger: `rgba(${colorPrimitives.danger300}/ 1.0)`,
};

// solid bg
const bgLight = {
  bgPrimary: `rgba(${colorPrimitives.primary500}/ 1.0)`,
  bgAccent: `rgba(${colorPrimitives.accent500}/ 1.0)`,
  bgInfo: `rgba(${colorPrimitives.info500}/ 1.0)`,
  bgSuccess: `rgba(${colorPrimitives.success500}/ 1.0)`,
  bgWarning: `rgba(${colorPrimitives.warning500}/ 1.0)`,
  bgDanger: `rgba(${colorPrimitives.danger500}/ 1.0)`,
  bgDark: `rgba(${colorPrimitives.gray500}/ 1.0)`,
  bgPrimaryDark: `rgba(${colorPrimitives.primary900}/ 1.0)`,
  bgAccentDark: `rgba(${colorPrimitives.accent900}/ 1.0)`,
};

const bgDark = {
  bgPrimary: `rgba(${colorPrimitives.primary600}/ 1.0)`,
  bgAccent: `rgba(${colorPrimitives.accent600}/ 1.0)`,
  bgInfo: `rgba(${colorPrimitives.info700}/ 1.0)`,
  bgSuccess: `rgba(${colorPrimitives.success700}/ 1.0)`,
  bgWarning: `rgba(${colorPrimitives.warning700}/ 1.0)`,
  bgDanger: `rgba(${colorPrimitives.danger700}/ 1.0)`,
  bgDark: `rgba(${colorPrimitives.gray400}/ 1.0)`,
  bgPrimaryDark: `rgba(${colorPrimitives.primary600}/ 1.0)`,
  bgAccentDark: `rgba(${colorPrimitives.accent600}/ 1.0)`,
};

// alpha bg
const bgAlphaLight = {
  bgAlphaPrimary: `rgba(${colorPrimitives.primary500}/ 0.12)`,
  bgAlphaAccent: `rgba(${colorPrimitives.accent500}/ 0.12)`,
  bgAlphaInfo: `rgba(${colorPrimitives.info500}/ 0.12)`,
  bgAlphaSuccess: `rgba(${colorPrimitives.success500}/ 0.12)`,
  bgAlphaWarning: `rgba(${colorPrimitives.warning500}/ 0.12)`,
  bgAlphaDanger: `rgba(${colorPrimitives.danger500}/ 0.12)`,
  bgAlphaDark: `rgba(${colorPrimitives.gray500}/ 0.12)`,
  bgAlphaPrimaryDark: `rgba(${colorPrimitives.primary900}/ 0.12)`,
  bgAlphaAccentDark: `rgba(${colorPrimitives.accent900}/ 0.12)`,
};

const bgAlphaDark = {
  bgAlphaPrimary: `rgba(${colorPrimitives.primary500}/ 0.12)`,
  bgAlphaAccent: `rgba(${colorPrimitives.accent500}/ 0.12)`,
  bgAlphaInfo: `rgba(${colorPrimitives.info500}/ 0.12)`,
  bgAlphaSuccess: `rgba(${colorPrimitives.success500}/ 0.12)`,
  bgAlphaWarning: `rgba(${colorPrimitives.warning500}/ 0.12)`,
  bgAlphaDanger: `rgba(${colorPrimitives.danger500}/ 0.12)`,
  bgAlphaDark: `rgba(${colorPrimitives.gray500}/ 0.12)`,
  bgAlphaPrimaryDark: `rgba(${colorPrimitives.primary900}/ 0.12)`,
  bgAlphaAccentDark: `rgba(${colorPrimitives.accent900}/ 0.12)`,
};

const light = {
  ...surfaceLight,
  ...bgLight,
  ...bgAlphaLight,
  ...textLight,
  ...borderLight,
  ...neutralColors,
};

const dark = {
  ...surfaceDark,
  ...bgDark,
  ...bgAlphaDark,
  ...textDark,
  ...borderDark,
  ...neutralColors,
};

export default { light, dark };
