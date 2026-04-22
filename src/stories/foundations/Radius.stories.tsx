import type { Meta, StoryObj } from "@storybook/react";
import { radius } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Radius",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-h-s font-semibold">Border radius</h1>
        <p className="text-p-m text-text-mid">
          Figma exposes 4 radius tokens:{" "}
          <code className="bg-bg-secondary px-01 rounded-s">fnd-radius-none / s / m / l</code>.
          The <code className="bg-bg-secondary px-01 rounded-s">pill</code> value is a
          code-side convenience for fully rounded interactive shapes (Button, Badge).
        </p>
      </header>

      <div className="grid grid-cols-5 gap-06">
        {Object.entries(radius).map(([name, value]) => (
          <div key={name} className="flex flex-col items-center gap-02">
            <div
              className="h-[120px] w-[120px] bg-green-celonis-50 border border-border-high"
              style={{ borderRadius: value === 999 ? 9999 : (value as number) }}
            />
            <div className="text-p-m font-medium">rounded-{name}</div>
            <div className="text-p-s text-text-mid">
              {value === 999 ? "pill (999px)" : `${value}px`}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
