import type { Meta, StoryObj } from "@storybook/react";
import { breakpoints } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Breakpoints",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const MAX_BAR = 1100;
const ABSOLUTE_MAX = 2200;

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-h-s font-semibold">Breakpoints</h1>
        <p className="text-p-m text-text-mid">
          Figma <code className="bg-bg-secondary px-01 rounded-s">breakpoint-*</code>{" "}
          tokens mapped to Tailwind screens. Use{" "}
          <code className="bg-bg-secondary px-01 rounded-s">s:flex</code>,{" "}
          <code className="bg-bg-secondary px-01 rounded-s">m:grid-cols-3</code>, etc.
        </p>
      </header>

      <div className="flex flex-col">
        {Object.entries(breakpoints).map(([key, bp]) => {
          const pctMin = (bp.min / ABSOLUTE_MAX) * MAX_BAR;
          const pctMax = bp.max ? (bp.max / ABSOLUTE_MAX) * MAX_BAR : MAX_BAR;
          return (
            <div
              key={key}
              className="grid grid-cols-[140px_180px_1fr] items-center gap-04 py-03 border-b border-border-low"
            >
              <div className="text-p-m font-medium">breakpoint-{key}</div>
              <div className="text-p-s text-text-mid">
                {bp.device} · {bp.min}
                {bp.max ? `–${bp.max}` : "+"}px
              </div>
              <div className="relative h-04 w-full bg-bg-secondary rounded-s">
                <div
                  className="absolute top-0 h-full bg-green-celonis-50 rounded-s"
                  style={{ left: pctMin, width: Math.max(pctMax - pctMin, 8) }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};
