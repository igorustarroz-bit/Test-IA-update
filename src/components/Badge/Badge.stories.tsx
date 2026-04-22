import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    tone: {
      control: "inline-radio",
      options: ["neutral", "success", "danger", "accent", "info"],
    },
    size: { control: "inline-radio", options: ["sm", "md"] },
    children: { control: "text" },
  },
  args: { children: "Label", tone: "neutral", size: "sm" },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllTones: Story = {
  render: () => (
    <div className="flex items-center gap-02">
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="danger">Danger</Badge>
      <Badge tone="accent">Accent</Badge>
      <Badge tone="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-02">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
};
