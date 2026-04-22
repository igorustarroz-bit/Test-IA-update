import type { Meta, StoryObj } from "@storybook/react";
import { G14Breadcrumbs } from "./G14-Breadcrumbs";

const meta: Meta<typeof G14Breadcrumbs> = {
  title: "Modules/G14 – Breadcrumbs",
  component: G14Breadcrumbs,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof G14Breadcrumbs>;

export const Default: Story = {};

export const Deep: Story = {
  args: {
    items: [
      { label: "Celonis Community", href: "#home" },
      { label: "Welcome guide", href: "#welcome" },
      { label: "Welcome to the Celonis Community: Your First Steps" },
    ],
  },
};
