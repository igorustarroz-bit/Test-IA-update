import type { Meta, StoryObj } from "@storybook/react";
import { G26Filters } from "./G26-Filters";

const meta: Meta<typeof G26Filters> = {
  title: "Modules/G26 – Filters",
  component: G26Filters,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G26Filters>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-[362px]">
      <G26Filters {...args} />
    </div>
  ),
};
