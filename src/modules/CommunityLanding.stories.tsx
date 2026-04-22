import type { Meta, StoryObj } from "@storybook/react";
import { G01Header } from "./G01-Header/G01-Header";
import { M00Hero } from "./M00-Hero/M00-Hero";
import { M00LatestActivity } from "./M00-LatestActivity/M00-LatestActivity";
import { G03TemplateFooter } from "./G03-TemplateFooter/G03-TemplateFooter";
import { G02Footer } from "./G02-Footer/G02-Footer";

const meta: Meta = {
  title: "Modules/◎ Community landing",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Full: Story = {
  render: () => (
    <div className="bg-bg-base">
      <G01Header />
      <M00Hero />
      <M00LatestActivity />
      <G03TemplateFooter />
      <G02Footer />
    </div>
  ),
};
