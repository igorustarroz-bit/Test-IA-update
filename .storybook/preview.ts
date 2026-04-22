import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|border|bg|text)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "base",
      values: [
        { name: "base", value: "#ffffff" },
        { name: "secondary", value: "#f5f5f5" },
        { name: "inverse", value: "#000000" },
      ],
    },
    layout: "padded",
  },
  decorators: [
    withThemeByDataAttribute<"light" | "dark">({
      themes: {
        Light: "light",
        Dark: "dark",
      },
      defaultTheme: "Light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
