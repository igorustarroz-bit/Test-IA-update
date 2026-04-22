import type { Meta, StoryObj } from "@storybook/react";
import { G01Header } from "./G01-Header/G01-Header";
import { G14Breadcrumbs } from "./G14-Breadcrumbs/G14-Breadcrumbs";
import { M00Topics } from "./M00-Topics/M00-Topics";
import { G03TemplateFooter } from "./G03-TemplateFooter/G03-TemplateFooter";
import { G02Footer } from "./G02-Footer/G02-Footer";

const meta: Meta = {
  title: "Modules/◎ Community tag list (Gainsight)",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Full: Story = {
  render: () => (
    <div className="bg-bg-base">
      <G01Header />
      <G14Breadcrumbs
        items={[
          { label: "Celonis Community", href: "#" },
          { label: "Community", href: "#" },
          { label: "Tag" },
        ]}
      />
      <M00Topics />
      <G03TemplateFooter />
      <G02Footer />
    </div>
  ),
};
