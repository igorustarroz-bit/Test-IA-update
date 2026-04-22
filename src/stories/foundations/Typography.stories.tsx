import type { Meta, StoryObj } from "@storybook/react";
import { typography, textClass } from "@/lib/tokens";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const entries = Object.entries(typography.textStyles) as Array<
  [keyof typeof typography.textStyles, { size: number; lh: number; ls: number }]
>;

const displays = entries.filter(([k]) => k.startsWith("Display"));
const headings = entries.filter(([k]) => k.startsWith("Heading"));
const paragraphs = entries.filter(([k]) => k.startsWith("Paragraph"));

function Row({
  token,
  spec,
  sample,
}: {
  token: keyof typeof typography.textStyles;
  spec: { size: number; lh: number; ls: number };
  sample: string;
}) {
  return (
    <div className="grid grid-cols-[220px_140px_1fr] items-baseline gap-06 py-03 border-b border-border-low">
      <div className="text-p-s text-text-mid">{token}</div>
      <div className="text-p-s text-text-mid">
        {spec.size}/{spec.lh} · {spec.ls}
      </div>
      <div className={textClass[token]}>{sample}</div>
    </div>
  );
}

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-09 p-08 bg-bg-base max-w-[1200px]">
      <header className="flex flex-col gap-01">
        <h1 className="text-h-s font-semibold">Typography</h1>
        <p className="text-p-m text-text-mid">
          Base family: <strong>Poppins</strong>, weight Regular (400) across the
          entire scale. 13 tokens total — 5 Paragraph, 7 Heading, 1 Display.
        </p>
      </header>

      <section className="flex flex-col">
        <h2 className="text-h-xs font-semibold mb-04">Display</h2>
        {displays.map(([k, spec]) => (
          <Row key={k} token={k} spec={spec} sample="Run on data" />
        ))}
      </section>

      <section className="flex flex-col">
        <h2 className="text-h-xs font-semibold mb-04">Heading</h2>
        {headings.map(([k, spec]) => (
          <Row key={k} token={k} spec={spec} sample="Process intelligence" />
        ))}
      </section>

      <section className="flex flex-col">
        <h2 className="text-h-xs font-semibold mb-04">Paragraph</h2>
        {paragraphs.map(([k, spec]) => (
          <Row
            key={k}
            token={k}
            spec={spec}
            sample="The quick brown fox jumps over the lazy dog."
          />
        ))}
      </section>

      <section className="flex flex-col gap-03">
        <h2 className="text-h-xs font-semibold">Weights available</h2>
        <p className="text-p-s text-text-mid">
          Figma uses only Regular. Weights below are available in code but not
          in the Figma styles.
        </p>
        <div className="flex flex-wrap gap-06 text-p-xl">
          <span className="font-light">Light 300</span>
          <span className="font-normal">Regular 400</span>
          <span className="font-medium">Medium 500</span>
          <span className="font-semibold">Semibold 600</span>
          <span className="font-bold">Bold 700</span>
        </div>
      </section>
    </div>
  ),
};
