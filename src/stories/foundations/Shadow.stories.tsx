import type { Meta, StoryObj } from "@storybook/react";
import { shadow } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Shadow",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-h-s font-semibold">Shadow</h1>
        <p className="text-p-m text-text-mid">
          Figma exposes a single effect style named <code>Shadow</code>.
          Composed of two layers: a 1px outline‑like shadow at 8% opacity plus a
          4px drop at 4% opacity. Applied as{" "}
          <code className="bg-bg-secondary px-01 rounded-s">shadow-fnd</code>.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-08 max-w-[960px]">
        <div className="flex flex-col gap-03">
          <div className="h-[180px] w-full bg-bg-base rounded-l border border-border-low shadow-fnd" />
          <div>
            <div className="text-p-m font-medium">shadow-fnd</div>
            <div className="text-p-s text-text-mid break-all">{shadow.fnd}</div>
          </div>
        </div>

        <div className="flex flex-col gap-03">
          <div className="h-[180px] w-full bg-bg-base rounded-l border border-border-low" />
          <div>
            <div className="text-p-m font-medium">no shadow (reference)</div>
            <div className="text-p-s text-text-mid">
              For comparison — same card without elevation.
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
