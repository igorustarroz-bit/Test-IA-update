import type { Meta, StoryObj } from "@storybook/react";
import { primitiveColors, semanticTokens } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

function Swatch({
  label,
  value,
  textDark = false,
}: {
  label: string;
  value: string;
  textDark?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden border border-border-low">
      <div
        className="h-[72px] w-full"
        style={{ backgroundColor: value }}
        aria-label={`${label} ${value}`}
      />
      <div className="px-03 py-02 bg-bg-base">
        <div className="text-sm font-medium text-text-high">{label}</div>
        <div className={`text-xs ${textDark ? "text-text-high" : "text-text-mid"}`}>
          {value}
        </div>
      </div>
    </div>
  );
}

function Ramp({ name, ramp }: { name: string; ramp: Record<string, string> }) {
  return (
    <section className="flex flex-col gap-03">
      <h3 className="text-xl font-semibold text-text-high capitalize">{name}</h3>
      <div className="grid grid-cols-6 gap-02 xl:grid-cols-12">
        {Object.entries(ramp).map(([shade, value]) => (
          <Swatch key={shade} label={shade} value={value} />
        ))}
      </div>
    </section>
  );
}

export const Primitives: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-3xl font-semibold">Primitive colors</h1>
        <p className="text-p-m text-text-mid">
          Raw palettes – do not use directly in product UIs, compose via semantic
          tokens instead.
        </p>
      </header>
      <Ramp name="Grey" ramp={primitiveColors.grey} />
      <Ramp name="Blue Celonis" ramp={primitiveColors.blueCelonis} />
      <Ramp name="Green Celonis" ramp={primitiveColors.greenCelonis} />
      <Ramp name="Yellow" ramp={primitiveColors.yellow} />
      <Ramp name="Red" ramp={primitiveColors.red} />
    </div>
  ),
};

function SemanticGroup({
  title,
  prefix,
  items,
}: {
  title: string;
  prefix: "text" | "background" | "border" | "graph";
  items: readonly string[];
}) {
  const prefixMap = { text: "--text-", background: "--background-", border: "--border-", graph: "--graph-" };
  return (
    <section className="flex flex-col gap-03">
      <h3 className="text-xl font-semibold text-text-high">{title}</h3>
      <div className="grid grid-cols-4 gap-03">
        {items.map((name) => (
          <div
            key={name}
            className="flex flex-col rounded-md overflow-hidden border border-border-low"
          >
            <div
              className="h-[64px] w-full"
              style={{ backgroundColor: `var(${prefixMap[prefix]}${name})` }}
            />
            <div className="px-03 py-02 bg-bg-base">
              <div className="text-sm font-medium text-text-high">
                {prefix}/{name}
              </div>
              <div className="text-xs text-text-mid">var({prefixMap[prefix]}{name})</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Semantic: Story = {
  render: () => (
    <div className="flex flex-col gap-08 p-08 bg-bg-base">
      <header className="flex flex-col gap-01">
        <h1 className="text-3xl font-semibold">Semantic tokens</h1>
        <p className="text-p-m text-text-mid">
          Theme-aware tokens. Switch the Storybook theme from the toolbar to
          preview Light vs. Dark.
        </p>
      </header>
      <SemanticGroup title="Text" prefix="text" items={semanticTokens.text} />
      <SemanticGroup
        title="Background"
        prefix="background"
        items={semanticTokens.background}
      />
      <SemanticGroup title="Border" prefix="border" items={semanticTokens.border} />
      <SemanticGroup title="Graph" prefix="graph" items={semanticTokens.graph} />
    </div>
  ),
};
