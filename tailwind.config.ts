import type { Config } from "tailwindcss";

/**
 * Celonis Community – Tailwind config
 * Source of truth: Figma Web-DS-Foundations-1.0 (fileKey eANF7lOciInZLEe1iIUuvJ).
 *
 * Token naming follows the Figma convention (fnd-spacing-*, fnd-radius-*,
 * breakpoint-*, etc.) so CSS classes and Figma tokens are 1:1 searchable.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,mdx}",
    "./.storybook/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    /* Screens — from ● Layout › Gird/breakpoints */
    screens: {
      xs: "320px",   // Mobile  (320–767)
      s:  "768px",   // Tablet  (768–1023)
      m:  "1024px",  // Laptop  (1024–1200)
      l:  "1201px",  // Desktop (1201–1599)
      xl: "1600px",  // HD      (1600–1919)
      xxl:"1920px",  // 4K      (1920+)
    },

    /* Spacing — fnd-spacing-{none, 01..12} */
    spacing: {
      "0":   "0",
      "01":  "4px",
      "02":  "8px",
      "03":  "12px",
      "04":  "16px",
      "05":  "20px",
      "06":  "24px",
      "07":  "32px",
      "08":  "40px",
      "09":  "56px",
      "10":  "64px",
      "11":  "80px",
      "12":  "112px",
      px:    "1px",
    },

    /* Radius — fnd-radius-{none, s, m, l} + pill/full for interactive shapes */
    borderRadius: {
      none: "0",
      s:    "2px",
      m:    "4px",
      l:    "8px",
      pill: "999px",
      full: "9999px",
    },

    /* Typography — Poppins Regular 400 across the whole scale */
    fontFamily: {
      sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    fontSize: {
      "p-xs":  ["10px",  { lineHeight: "12px",  letterSpacing: "0" }],
      "p-s":   ["12px",  { lineHeight: "16px",  letterSpacing: "0" }],
      "p-m":   ["14px",  { lineHeight: "18px",  letterSpacing: "0" }],
      "p-l":   ["16px",  { lineHeight: "22px",  letterSpacing: "0" }],
      "p-xl":  ["18px",  { lineHeight: "24px",  letterSpacing: "0" }],
      "h-xxs": ["20px",  { lineHeight: "28px",  letterSpacing: "-0.2px" }],
      "h-xs":  ["24px",  { lineHeight: "32px",  letterSpacing: "-0.5px" }],
      "h-s":   ["32px",  { lineHeight: "40px",  letterSpacing: "-0.5px" }],
      "h-m":   ["44px",  { lineHeight: "48px",  letterSpacing: "-1px" }],
      "h-l":   ["60px",  { lineHeight: "72px",  letterSpacing: "-1.5px" }],
      "h-xl":  ["80px",  { lineHeight: "80px",  letterSpacing: "-3px" }],
      "h-xxl": ["100px", { lineHeight: "100px", letterSpacing: "-2px" }],
      "d-s":   ["128px", { lineHeight: "128px", letterSpacing: "-4px" }],
    },

    extend: {
      colors: {
        /* Primitive palettes – Celonis */
        grey: {
          black: "#000000",
          100: "#1d1d1d", 90: "#333333", 80: "#4d4d4d", 70: "#666666",
          60: "#767676", 50: "#8e8d8d", 40: "#cbcbcb", 30: "#d9d9d9",
          20: "#e5e5e5", 10: "#f5f5f5",
          white: "#ffffff",
        },
        "blue-celonis": {
          100: "#000a3d", 90: "#001062", 80: "#001894", 70: "#0022ca",
          60:  "#0029ff", 50: "#2c4eff", 40: "#506cff", 30: "#8ea0ff",
          20:  "#c6cfff", 10: "#ebedff",
        },
        "green-celonis": {
          100: "#02410c", 90: "#057016", 80: "#0b9e23", 70: "#04cd24",
          60:  "#56ed4b", 50: "#5cfe50", 40: "#7eff74", 30: "#9eff96",
          20:  "#b7ffb1", 10: "#d5ffd1",
        },
        yellow: {
          100: "#4a3a04", 90: "#745b05", 80: "#ae8a0d", 70: "#e0b315",
          60:  "#ffcd1e", 50: "#ffda55", 40: "#ffe175", 30: "#ffe897",
          20:  "#fff0ba", 10: "#fff6d5",
        },
        red: {
          100: "#490e08", 90: "#621009", 80: "#81180f", 70: "#bf281b",
          60:  "#ea3424", 50: "#ef5b4e", 40: "#f47468", 30: "#f8968d",
          20:  "#ffb5af", 10: "#ffdfdc",
        },
        /* Semantic tokens – consumed via CSS variables so they can theme */
        text: {
          high:            "var(--text-high)",
          mid:             "var(--text-mid)",
          low:             "var(--text-low)",
          inverse:         "var(--text-inverse)",
          difference:      "var(--text-difference)",
          "always-light":  "var(--text-always-light)",
          "state-disabled":"var(--text-state-disabled)",
          success:         "var(--text-success)",
          danger:          "var(--text-danger)",
        },
        bg: {
          base:             "var(--background-base)",
          secondary:        "var(--background-secondary)",
          "secondary-alt":  "var(--background-secondary-alt)",
          tertiary:         "var(--background-tertiary)",
          quaternary:       "var(--background-quaternary)",
          quinary:          "var(--background-quinary)",
          inverse:          "var(--background-inverse)",
          "always-dark":    "var(--background-always-dark)",
          "accent-green":   "var(--background-accent-green)",
          "accent-secondary":"var(--background-accent-secondary)",
          success:          "var(--background-success)",
          danger:           "var(--background-danger)",
          "state-disabled": "var(--background-state-disabled)",
        },
        border: {
          high:            "var(--border-high)",
          mid:             "var(--border-mid)",
          "mid-dark":      "var(--border-mid-dark)",
          low:             "var(--border-low)",
          inverse:         "var(--border-inverse)",
          "state-disabled":"var(--border-state-disabled)",
          success:         "var(--border-success)",
          danger:          "var(--border-danger)",
        },
        graph: {
          1: "var(--graph-1)", 2: "var(--graph-2)", 3: "var(--graph-3)",
          4: "var(--graph-4)", 5: "var(--graph-5)", 6: "var(--graph-6)",
          7: "var(--graph-7)",
        },
      },
      boxShadow: {
        /* Figma exposes exactly one effect style: "Shadow" (two-layer drop shadow).
           Matches inset-free elevation used across cards and overlays. */
        fnd: "0 0 1px 1px rgb(0 0 0 / 0.08), 0 4px 0 0 rgb(0 0 0 / 0.04)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
