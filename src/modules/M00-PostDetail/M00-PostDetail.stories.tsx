import type { Meta, StoryObj } from "@storybook/react";
import { M00PostDetail } from "./M00-PostDetail";

const meta: Meta<typeof M00PostDetail> = {
  title: "Modules/M00 – Post detail",
  component: M00PostDetail,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof M00PostDetail>;

export const Default: Story = {};
