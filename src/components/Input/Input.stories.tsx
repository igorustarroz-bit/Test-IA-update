import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    inputSize: { control: "inline-radio", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["text", "email", "password", "search"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    label: "Email",
    placeholder: "you@celonis.com",
    inputSize: "md",
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "We will never share your email." },
};

export const WithError: Story = {
  args: {
    error: "Enter a valid work email.",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "locked@celonis.com" },
};

export const WithAdornments: Story = {
  render: () => (
    <div className="w-[320px] flex flex-col gap-04">
      <Input
        label="Search"
        placeholder="Search the community…"
        leading={<span aria-hidden>⌕</span>}
      />
      <Input
        label="Website"
        placeholder="celonis.com"
        leading={<span aria-hidden className="text-p-s">https://</span>}
        trailing={<span aria-hidden>↗</span>}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[320px] flex flex-col gap-04">
      <Input inputSize="sm" label="Small" placeholder="sm" />
      <Input inputSize="md" label="Medium" placeholder="md" />
      <Input inputSize="lg" label="Large" placeholder="lg" />
    </div>
  ),
};
