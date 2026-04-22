import type { Meta, StoryObj } from "@storybook/react";
import { G13ArticleTopic } from "./G13-ArticleTopic";

const meta: Meta<typeof G13ArticleTopic> = {
  title: "Modules/G13 – Article topic",
  component: G13ArticleTopic,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G13ArticleTopic>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    title: "How to configure PQL expressions for throughput time analysis",
    author: "maria.b",
    group: "Process Mining & PQL",
    time: "3 hours ago",
    body: "Share your approach to calculating throughput time across parallel activities — here's what we've tried so far.",
  },
};
