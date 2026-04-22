import type { Meta, StoryObj } from "@storybook/react";
import { M00Topics } from "./M00-Topics";

const meta: Meta<typeof M00Topics> = {
  title: "Modules/M00 – Topics",
  component: M00Topics,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof M00Topics>;

export const Default: Story = {};
