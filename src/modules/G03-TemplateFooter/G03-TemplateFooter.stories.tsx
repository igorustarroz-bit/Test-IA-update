import type { Meta, StoryObj } from "@storybook/react";
import { G03TemplateFooter } from "./G03-TemplateFooter";

const meta: Meta<typeof G03TemplateFooter> = {
  title: "Modules/G03 – Template footer",
  component: G03TemplateFooter,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof G03TemplateFooter>;

export const Default: Story = {};

export const CustomCopy: Story = {
  args: {
    poweredByName: "Celonis",
    codeOfConductLabel: "Community guidelines",
  },
};
