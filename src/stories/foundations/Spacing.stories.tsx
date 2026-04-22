import type { Meta, StoryObj } from "@storybook/react";
import { spacing } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Spacing",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-h-s font-semibold">Spacing scale</h1>
        <p className="text-p-m text-text-mid">
          Figma <code className="bg-bg-secondary px-01 rounded-s">fnd-spacing-*</code>{" "}
          tokens exposed as Tailwind utilities. Example:{" "}
          <code className="bg-bg-secondary px-01 rounded-s">p-04</code> = 16px,{" "}
          <code className="bg-bg-secondary px-01 rounded-s">gap-02</code> = 8px.
        </p>
      </header>

      <div className="flex flex-col">
        {Object.entries(spacing).map(([key, value]) => (
          <div
            key={key}
            className="grid grid-cols-[160px_100px_1fr] items-center gap-04 py-02 border-b border-border-low"
          >
            <div className="text-p-m font-medium text-text-high">
              fnd-spacing-{key === "0" ? "none" : key}
            </div>
            <div className="text-p-s text-text-mid">{value}px</div>
            <div
              className="h-03 bg-green-celonis-50 rounded-s"
              style={{ width: Math.max(value as number, 2) }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
