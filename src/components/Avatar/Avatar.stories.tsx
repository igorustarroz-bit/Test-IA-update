import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "inline-radio", options: ["circle", "square"] },
    status: {
      control: "inline-radio",
      options: [null, "online", "offline", "busy"],
    },
    ring: { control: "boolean" },
  },
  args: { name: "Ada Lovelace", size: "md", shape: "circle" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/160?img=47",
  },
};

export const Initials: Story = {
  args: { name: "Celonis Community" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-03">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-01">
          <Avatar size={s} name="Ada Lovelace" src="https://i.pravatar.cc/160?img=47" />
          <span className="text-p-xs text-text-mid">{s}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-03">
      <Avatar name="Grace Hopper" status="online" />
      <Avatar name="Alan Turing" status="busy" />
      <Avatar name="Katherine Johnson" status="offline" />
    </div>
  ),
};

export const Stack: Story = {
  render: () => (
    <div className="flex -space-x-02">
      {[47, 15, 32, 22].map((i) => (
        <Avatar
          key={i}
          ring
          name={`User ${i}`}
          src={`https://i.pravatar.cc/160?img=${i}`}
        />
      ))}
      <span
        className="inline-flex items-center justify-center h-09 w-09 rounded-pill bg-bg-tertiary text-p-s font-medium ring-2 ring-bg-base"
        aria-label="3 more members"
      >
        +3
      </span>
    </div>
  ),
};
