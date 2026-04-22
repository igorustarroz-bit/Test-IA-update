import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "tertiary", "ghost", "danger"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    iconOnly: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-04">
      {(["primary", "secondary", "tertiary", "ghost", "danger"] as const).map(
        (variant) => (
          <div key={variant} className="flex items-center gap-03">
            <span className="w-[92px] text-sm text-text-mid capitalize">
              {variant}
            </span>
            <Button variant={variant} size="sm">
              Small
            </Button>
            <Button variant={variant} size="md">
              Medium
            </Button>
            <Button variant={variant} size="lg">
              Large
            </Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </div>
        ),
      )}
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-03">
      <Button iconOnly aria-label="Add" variant="primary">
        <ArrowIcon />
      </Button>
      <Button iconOnly aria-label="Add" variant="secondary">
        <ArrowIcon />
      </Button>
      <Button iconOnly aria-label="Add" variant="tertiary">
        <ArrowIcon />
      </Button>
    </div>
  ),
};

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
