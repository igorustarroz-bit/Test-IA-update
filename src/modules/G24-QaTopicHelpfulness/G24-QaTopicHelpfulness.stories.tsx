import type { Meta, StoryObj } from "@storybook/react";
import { G24QaTopicHelpfulness } from "./G24-QaTopicHelpfulness";

const meta: Meta<typeof G24QaTopicHelpfulness> = {
  title: "Modules/G24 – Qa topic helpfulness",
  component: G24QaTopicHelpfulness,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G24QaTopicHelpfulness>;

export const Default: Story = {};

export const PreSelected: Story = {
  args: { defaultValue: "great" },
};
