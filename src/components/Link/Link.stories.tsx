import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "quiet", "inverse"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    underline: { control: "inline-radio", options: ["always", "hover", "none"] },
    external: { control: "boolean" },
  },
  args: {
    children: "Explore the Celonis community",
    href: "https://community.celonis.com",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const External: Story = {
  args: { external: true },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-03">
      <Link variant="default" href="#">Default link</Link>
      <Link variant="quiet" href="#">Quiet link (meta)</Link>
      <div className="bg-bg-inverse p-04 rounded-l">
        <Link variant="inverse" href="#">Inverse link on dark surface</Link>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-02">
      <Link size="sm" href="#">Small link</Link>
      <Link size="md" href="#">Medium link</Link>
      <Link size="lg" href="#">Large link</Link>
    </div>
  ),
};

export const UnderlineStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-02">
      <Link underline="always" href="#">Underline always</Link>
      <Link underline="hover" href="#">Underline on hover</Link>
      <Link underline="none" href="#">No underline</Link>
    </div>
  ),
};
