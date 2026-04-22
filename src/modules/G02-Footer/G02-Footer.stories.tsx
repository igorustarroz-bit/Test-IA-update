import type { Meta, StoryObj } from "@storybook/react";
import { G02Footer } from "./G02-Footer";

const meta: Meta<typeof G02Footer> = {
  title: "Modules/G02 – Footer",
  component: G02Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof G02Footer>;

export const Default: Story = {};

export const GermanMarket: Story = {
  args: {
    language: { code: "DE" },
    country: { label: "Germany" },
  },
};
