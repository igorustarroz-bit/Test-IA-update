import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    interactive: { control: "boolean" },
  },
  args: {
    eyebrow: "Community",
    title: "How process mining is reshaping finance operations",
    description:
      "A practitioner guide to identifying inefficiencies and standardising execution across global shared services.",
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <Card {...args} />
    </div>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <Card
        {...args}
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
        imageAlt="Team collaborating"
      />
    </div>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <div className="w-[360px]">
      <Card
        {...args}
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
        imageAlt="Analytics dashboard"
        footer={
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-mid">12 min read</span>
            <Button size="sm" variant="tertiary">
              Read more
            </Button>
          </div>
        }
      />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-05 max-w-[1100px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          eyebrow="Article"
          title={`Community insight #${i + 1}`}
          description="Short description about this post — shows how the card composes in a grid."
          image={`https://picsum.photos/seed/celonis-${i}/800/450`}
        />
      ))}
    </div>
  ),
};
