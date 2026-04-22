import type { Meta, StoryObj } from "@storybook/react";
import { G19RelatedTopics } from "./G19-RelatedTopics";

const meta: Meta<typeof G19RelatedTopics> = {
  title: "Modules/G19 – Related topics",
  component: G19RelatedTopics,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 362 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof G19RelatedTopics>;

export const Default: Story = {};
