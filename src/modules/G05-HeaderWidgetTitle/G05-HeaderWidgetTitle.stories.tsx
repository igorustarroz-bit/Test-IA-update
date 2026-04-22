import type { Meta, StoryObj } from "@storybook/react";
import { G05HeaderWidgetTitle } from "./G05-HeaderWidgetTitle";

const meta: Meta<typeof G05HeaderWidgetTitle> = {
  title: "Modules/G05 – Header Widget Title",
  component: G05HeaderWidgetTitle,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G05HeaderWidgetTitle>;

export const Default: Story = {
  args: {
    title: "Welcome to the Celonis Community: Your First Steps 👋",
    subtitle: "2 months ago • 3 replies • 35 views",
  },
};

export const NoSubtitle: Story = {
  args: {
    title: "Welcome to the Celonis Community",
    showSubtitle: false,
  },
};

export const Compact: Story = {
  args: {
    title: "Welcome to the Celonis Community: Your First Steps 👋",
    subtitle: "2 months ago • 3 replies • 35 views",
    compact: true,
  },
};
