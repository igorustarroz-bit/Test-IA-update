import type { Meta, StoryObj } from "@storybook/react";
import { G23ListItemsHeader } from "./G23-ListItemsHeader";

const meta: Meta<typeof G23ListItemsHeader> = {
  title: "Modules/G23 – List items header",
  component: G23ListItemsHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G23ListItemsHeader>;

export const Default: Story = { args: { title: "3 replies" } };
