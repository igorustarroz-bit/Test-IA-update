import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    tone: {
      control: "inline-radio",
      options: ["neutral", "accent", "info", "success", "danger"],
    },
    size: { control: "inline-radio", options: ["sm", "md"] },
    outline: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Process Mining", tone: "neutral", size: "sm" },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-02">
      <Tag tone="neutral">Neutral</Tag>
      <Tag tone="accent">Accent</Tag>
      <Tag tone="info">Info</Tag>
      <Tag tone="success">Success</Tag>
      <Tag tone="danger">Danger</Tag>
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-02">
      <Tag tone="neutral" outline>Neutral</Tag>
      <Tag tone="accent" outline>Accent</Tag>
      <Tag tone="info" outline>Info</Tag>
      <Tag tone="success" outline>Success</Tag>
      <Tag tone="danger" outline>Danger</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([
      { id: "1", label: "Process Mining", tone: "accent" as const },
      { id: "2", label: "SAP", tone: "info" as const },
      { id: "3", label: "EMS", tone: "neutral" as const },
      { id: "4", label: "Best practice", tone: "success" as const },
    ]);
    return (
      <div className="flex flex-wrap items-center gap-02 min-w-[320px]">
        {items.map((t) => (
          <Tag
            key={t.id}
            tone={t.tone}
            size="md"
            onRemove={() => setItems((xs) => xs.filter((x) => x.id !== t.id))}
          >
            {t.label}
          </Tag>
        ))}
        {items.length === 0 ? (
          <span className="text-p-s text-text-mid">No tags left</span>
        ) : null}
      </div>
    );
  },
};

export const WithIcon: Story = {
  args: {
    iconLeft: <span>#</span>,
    children: "celonis",
    tone: "info",
    size: "md",
  },
};
