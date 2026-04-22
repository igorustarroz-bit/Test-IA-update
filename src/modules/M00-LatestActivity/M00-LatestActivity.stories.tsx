import type { Meta, StoryObj } from "@storybook/react";
import { M00LatestActivity } from "./M00-LatestActivity";

const meta: Meta<typeof M00LatestActivity> = {
  title: "Modules/M00 – Latest activity",
  component: M00LatestActivity,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof M00LatestActivity>;

export const Default: Story = {};

export const HelpOthersTab: Story = {
  args: {
    activeTab: "Help others",
  },
};

export const NoTags: Story = {
  args: {
    tags: [],
  },
};
