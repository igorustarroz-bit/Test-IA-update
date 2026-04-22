import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

export interface M00ReplyEditorProps {
  title?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  sendLabel?: string;
  className?: string;
}

/* ---------- Toolbar icons (simple, semantic) ---------- */

const TOOLBAR = [
  { label: "Bold",        glyph: "B",  bold: true,  italic: false },
  { label: "Italic",      glyph: "I",  bold: false, italic: true  },
  { label: "Underline",   glyph: "U",  bold: false, italic: false, underline: true },
  { label: "Strike",      glyph: "S",  bold: false, italic: false, strike: true },
  { label: "Ordered list",glyph: "1.", bold: false, italic: false },
  { label: "Bulleted list",glyph:"•",  bold: false, italic: false },
  { label: "Quote",       glyph: "❝",  bold: false, italic: false },
  { label: "Code",        glyph: "</>",bold: false, italic: false },
  { label: "Link",        glyph: "🔗", bold: false, italic: false },
  { label: "Image",       glyph: "🖼", bold: false, italic: false },
  { label: "Mention",     glyph: "@",  bold: false, italic: false },
  { label: "Emoji",       glyph: "😊", bold: false, italic: false },
];

/**
 * M00 – Reply editor
 * Simplified port of the reply editor inside the Post Detail page
 * (nodes 12112:9579 → 12112:10085 → 12112:10131).
 *
 * Spec:
 *   - Heading row with "Reply" (text-h-xxs)
 *   - Toolbar strip (inner padding 01, gap-01, 39px tall)
 *   - Textarea InputBox — 164px tall, placeholder text-p-xl text-text-mid,
 *     border border-border-mid, rounded-m
 *   - Footer row with right-aligned Send button (h-10, rounded-s, bg-bg-inverse)
 */
export function M00ReplyEditor({
  title = "Reply",
  placeholder = "Select an option",
  onSubmit,
  sendLabel = "Send",
  className,
}: M00ReplyEditorProps) {
  const [value, setValue] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    setValue("");
  };

  return (
    <form
      onSubmit={submit}
      data-node-id="12112:9579"
      data-name="M00-ReplyEditor"
      className={cn("w-full bg-bg-base flex flex-col", className)}
    >
      {/* Header row */}
      <div className="px-06 py-06 flex items-center">
        <div className="flex-1 min-w-0 text-h-xxs text-text-high">{title}</div>
      </div>

      {/* Body: toolbar + textarea */}
      <div className="px-06 flex flex-col">
        <div className="w-full border border-border-mid rounded-m overflow-hidden bg-bg-base">
          {/* Toolbar */}
          <div
            role="toolbar"
            aria-label="Formatting"
            className={cn(
              "flex items-center gap-01 flex-wrap",
              "border-b border-border-low",
              "px-02 py-01 min-h-[39px]",
            )}
          >
            {TOOLBAR.map((t) => (
              <button
                key={t.label}
                type="button"
                aria-label={t.label}
                className={cn(
                  "inline-flex items-center justify-center",
                  "h-[28px] min-w-[28px] px-02 rounded-s",
                  "text-p-s text-text-high",
                  "hover:bg-bg-secondary transition-colors",
                  "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-1",
                  t.bold && "font-bold",
                  t.italic && "italic",
                  (t as { underline?: boolean }).underline && "underline underline-offset-2",
                  (t as { strike?: boolean }).strike && "line-through",
                )}
              >
                {t.glyph}
              </button>
            ))}
          </div>

          {/* Textarea */}
          <label className="sr-only" htmlFor="m00-reply-textarea">
            {title}
          </label>
          <textarea
            id="m00-reply-textarea"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={cn(
              "block w-full resize-none bg-bg-base",
              "p-04 min-h-[132px]",
              "text-p-xl text-text-high placeholder:text-text-mid",
              "outline-none",
            )}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="px-06 pt-06 pb-06 flex items-center justify-end">
        <button
          type="submit"
          className={cn(
            "inline-flex items-center justify-center gap-01",
            "h-[40px] px-04 py-02 rounded-s",
            "bg-bg-inverse text-text-inverse",
            "text-p-m whitespace-nowrap",
            "outline-none focus-visible:ring-2 focus-visible:ring-blue-celonis-50 focus-visible:ring-offset-2",
            "transition-colors hover:bg-grey-90",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
          disabled={!value.trim()}
        >
          {sendLabel}
        </button>
      </div>
    </form>
  );
}
