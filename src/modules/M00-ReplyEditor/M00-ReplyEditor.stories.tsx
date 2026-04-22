import type { Meta, StoryObj } from "@storybook/react";
import { M00ReplyEditor } from "./M00-ReplyEditor";

const meta: Meta<typeof M00ReplyEditor> = {
  title: "Modules/M00 – Reply editor",
  component: M00ReplyEditor,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof M00ReplyEditor>;

export const Default: Story = {};
