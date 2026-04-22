/**
 * Design tokens – mirror of the Figma variables.
 * Source: Web-DS-Foundations-1.0 (fileKey eANF7lOciInZLEe1iIUuvJ).
 * Keep in sync with tailwind.config.ts and src/index.css.
 */

export const primitiveColors = {
  grey: {
    black: "#000000",
    100: "#1d1d1d", 90: "#333333", 80: "#4d4d4d", 70: "#666666",
    60: "#767676", 50: "#8e8d8d", 40: "#cbcbcb", 30: "#d9d9d9",
    20: "#e5e5e5", 10: "#f5f5f5",
    white: "#ffffff",
  },
  blueCelonis: {
    100: "#000a3d", 90: "#001062", 80: "#001894", 70: "#0022ca",
    60: "#0029ff", 50: "#2c4eff", 40: "#506cff", 30: "#8ea0ff",
    20: "#c6cfff", 10: "#ebedff",
  },
  greenCelonis: {
    100: "#02410c", 90: "#057016", 80: "#0b9e23", 70: "#04cd24",
    60: "#56ed4b", 50: "#5cfe50", 40: "#7eff74", 30: "#9eff96",
    20: "#b7ffb1", 10: "#d5ffd1",
  },
  yellow: {
    100: "#4a3a04", 90: "#745b05", 80: "#ae8a0d", 70: "#e0b315",
    60: "#ffcd1e", 50: "#ffda55", 40: "#ffe175", 30: "#ffe897",
    20: "#fff0ba", 10: "#fff6d5",
  },
  red: {
    100: "#490e08", 90: "#621009", 80: "#81180f", 70: "#bf281b",
    60: "#ea3424", 50: "#ef5b4e", 40: "#f47468", 30: "#f8968d",
    20: "#ffb5af", 10: "#ffdfdc",
  },
} as const;

export const semanticTokens = {
  text: [
    "high", "mid", "low", "inverse", "difference",
    "always-light", "state-disabled", "success", "danger",
  ],
  background: [
    "base", "secondary", "secondary-alt", "tertiary", "quaternary",
    "quinary", "inverse", "always-dark",
    "accent-green", "accent-secondary",
    "success", "danger", "state-disabled",
  ],
  border: [
    "high", "mid", "mid-dark", "low", "inverse",
    "state-disabled", "success", "danger",
  ],
  graph: ["1", "2", "3", "4", "5", "6", "7"],
} as const;

/** fnd-spacing-* tokens (px values) */
export const spacing = {
  "0": 0, "01": 4, "02": 8, "03": 12, "04": 16, "05": 20, "06": 24,
  "07": 32, "08": 40, "09": 56, "10": 64, "11": 80, "12": 112,
} as const;

/** fnd-radius-* tokens (px) + pill for interactive shapes */
export const radius = {
  none: 0, s: 2, m: 4, l: 8, pill: 999,
} as const;

export const breakpoints = {
  xs:  { min: 320,  max: 767,   device: "Mobile"     },
  s:   { min: 768,  max: 1023,  device: "Tablet"     },
  m:   { min: 1024, max: 1200,  device: "Laptop"     },
  l:   { min: 1201, max: 1599,  device: "Desktop"    },
  xl:  { min: 1600, max: 1919,  device: "HD screens" },
  xxl: { min: 1920, max: null,  device: "4K screens" },
} as const;

export const typography = {
  fontFamily: "Poppins",
  fontWeight: 400, // Figma defines every style at Regular
  textStyles: {
    "Paragraph/XS":  { size: 10,  lh: 12,  ls: 0 },
    "Paragraph/S":   { size: 12,  lh: 16,  ls: 0 },
    "Paragraph/M":   { size: 14,  lh: 18,  ls: 0 },
    "Paragraph/L":   { size: 16,  lh: 22,  ls: 0 },
    "Paragraph/XL":  { size: 18,  lh: 24,  ls: 0 },
    "Heading/XXS":   { size: 20,  lh: 28,  ls: -0.2 },
    "Heading/XS":    { size: 24,  lh: 32,  ls: -0.5 },
    "Heading/S":     { size: 32,  lh: 40,  ls: -0.5 },
    "Heading/M":     { size: 44,  lh: 48,  ls: -1 },
    "Heading/L":     { size: 60,  lh: 72,  ls: -1.5 },
    "Heading/XL":    { size: 80,  lh: 80,  ls: -3 },
    "Heading/XXL":   { size: 100, lh: 100, ls: -2 },
    "Display/S":     { size: 128, lh: 128, ls: -4 },
  },
} as const;

/** Tailwind fontSize class shortnames matching textStyles */
export const textClass = {
  "Paragraph/XS": "text-p-xs",
  "Paragraph/S":  "text-p-s",
  "Paragraph/M":  "text-p-m",
  "Paragraph/L":  "text-p-l",
  "Paragraph/XL": "text-p-xl",
  "Heading/XXS":  "text-h-xxs",
  "Heading/XS":   "text-h-xs",
  "Heading/S":    "text-h-s",
  "Heading/M":    "text-h-m",
  "Heading/L":    "text-h-l",
  "Heading/XL":   "text-h-xl",
  "Heading/XXL":  "text-h-xxl",
  "Display/S":    "text-d-s",
} as const;

export const shadow = {
  fnd: "0 0 1px 1px rgb(0 0 0 / 0.08), 0 4px 0 0 rgb(0 0 0 / 0.04)",
} as const;
