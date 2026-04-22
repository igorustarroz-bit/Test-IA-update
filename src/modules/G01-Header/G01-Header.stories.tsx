import type { Meta, StoryObj } from "@storybook/react";
import { G01Header } from "./G01-Header";

const meta: Meta<typeof G01Header> = {
  title: "Modules/G01 – Header",
  component: G01Header,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof G01Header>;

export const Default: Story = {};

export const CustomSite: Story = {
  args: {
    siteName: "Developers",
    primaryCtaLabel: "New thread",
    secondaryCtaLabel: "Sign in",
  },
};
