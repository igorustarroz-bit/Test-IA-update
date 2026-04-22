import type { Meta, StoryObj } from "@storybook/react";
import { M00Hero } from "./M00-Hero";

const meta: Meta<typeof M00Hero> = {
  title: "Modules/M00 – Hero (G8 generic search)",
  component: M00Hero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {
    title: "Q&A Categories",
    description: "Ask questions, get answers and engage with your peers",
    searchPlaceholder: "Search all community",
    shortcut: "⌘ K",
  },
};

export default meta;
type Story = StoryObj<typeof M00Hero>;

export const Default: Story = {};

export const NoShortcut: Story = {
  args: { shortcut: null },
};

export const LongerCopy: Story = {
  args: {
    title: "Success Hub",
    description:
      "The hub for Celonis success stories, playbooks, certifications, and peer-reviewed implementation patterns.",
    searchPlaceholder: "Search playbooks, certifications…",
  },
};
