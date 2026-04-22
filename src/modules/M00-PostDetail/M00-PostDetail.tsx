import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { G05HeaderWidgetTitle } from "@/modules/G05-HeaderWidgetTitle/G05-HeaderWidgetTitle";
import {
  G11QaTopicBlock,
  G12Callout,
  type G11AuthorMeta,
} from "@/modules/G11-QaTopicBlock/G11-QaTopicBlock";
import { G19RelatedTopics } from "@/modules/G19-RelatedTopics/G19-RelatedTopics";
import { G23ListItemsHeader } from "@/modules/G23-ListItemsHeader/G23-ListItemsHeader";
import { G24QaTopicHelpfulness } from "@/modules/G24-QaTopicHelpfulness/G24-QaTopicHelpfulness";
import { M00ReplyEditor } from "@/modules/M00-ReplyEditor/M00-ReplyEditor";

/* ---------- Types ---------- */

export interface PostReply {
  id: string;
  author: G11AuthorMeta;
  body: ReactNode;
}

export interface M00PostDetailProps {
  title?: string;
  subtitle?: string;
  /** Large hero image shown above the main post. Falls back to a dark gradient. */
  coverImageSrc?: string;
  author?: G11AuthorMeta;
  mainBody?: ReactNode;
  mainCallout?: ReactNode;
  mainExtra?: ReactNode;
  replies?: PostReply[];
  className?: string;
  onReplySubmit?: (value: string) => void;
}

/* ---------- Defaults (from Figma frame 12112:5283) ---------- */

const DEFAULT_AUTHOR: G11AuthorMeta = {
  avatarSrc: "https://i.pravatar.cc/128?img=32",
  role: "New participant",
  name: "Just in Time",
  glossa: "asked in",
  context: "Got a general question?",
};

const DEFAULT_MAIN_BODY: ReactNode = (
  <>
    {`Welcome to the Celonis Community! 👋 Here's what you need to know to get started, connect with others, and make the most of your experience.\n\nWhy join the community?\n\nThe Celonis Community is where people like you—members, experts, learners, and change makers—come together to ask questions, share insights, and grow. Whether you're just beginning your journey or have deep product knowledge, this space is here to support you.\n\nWhen you join the conversation, you not only get answers—you help shape the community for everyone.\n\nI'm new here. What's the best way to begin?\n\nWelcome! A good first step is to review our Community Guidelines and Community FAQ.`}
  </>
);

const DEFAULT_MAIN_CALLOUT: ReactNode = (
  <G12Callout>
    <ul className="list-disc ml-04 flex flex-col gap-03">
      <li>
        <span className="text-text-high">📝 Read the Community Guidelines:</span>{" "}
        Get to know the do&rsquo;s and don&rsquo;ts of participating. Our moderators are here to help keep this a safe and welcoming space.
      </li>
      <li>
        <span className="text-text-high">👤 Complete Your Profile:</span>{" "}
        Add a name, photo, and a few details to help others know who you are.
      </li>
      <li>
        <span className="text-text-high">🤝 Introduce Yourself:</span>{" "}
        Head over to{" "}
        <a className="underline" href="#community-connect">
          Community Connect
        </a>{" "}
        to say hello and meet other members.
      </li>
      <li>
        <span className="text-text-high">🚀 Explore the Celonis Success Hub:</span>{" "}
        Find the right resources in every step of your journey.
      </li>
      <li>
        <span className="text-text-high">🔔 Keep Up with Product Updates:</span>{" "}
        Stay informed about the latest product improvements by subscribing to the Product Updates section.
      </li>
    </ul>
  </G12Callout>
);

const DEFAULT_MAIN_EXTRA: ReactNode = (
  <>
    {`If there are specific categories that pique your interest, consider subscribing to them. This will ensure you receive notifications whenever new discussions start within those areas, so you don't miss a thing!\n\nGot questions? You might find the answer in our `}
    <a className="underline" href="#faqs">
      Celonis Community FAQs
    </a>
    {`, so we recommend checking there first. If not, don't hesitate to reach out to the Celonis Community Team at community@celonis.com!\n\nWe're so glad you're here—take your time exploring, connect with others, and enjoy being part of the Celonis Community! 😊`}
  </>
);

const DEFAULT_REPLIES: PostReply[] = [
  {
    id: "1",
    author: {
      avatarSrc: "https://i.pravatar.cc/128?img=14",
      role: "New participant",
      name: "Jane Doe",
      glossa: "replied",
    },
    body: "A preview of the details to question being asked",
  },
  {
    id: "2",
    author: {
      avatarSrc: "https://i.pravatar.cc/128?img=22",
      role: "New participant",
      name: "Alex Kim",
      glossa: "replied",
    },
    body: "A preview of the details to question being asked",
  },
  {
    id: "3",
    author: {
      avatarSrc: "https://i.pravatar.cc/128?img=51",
      role: "New participant",
      name: "Sam Rivera",
      glossa: "replied",
    },
    body: "A preview of the details to question being asked",
  },
];

/* ---------- Module ---------- */

/**
 * M00 – Post detail
 * Port of Figma `M00-Post Detail` (node 12112:5294) — the Post page body
 * wrapped between G14-breadcrumbs and G03-template-footer.
 *
 * Layout (m breakpoint and up):
 *   - Container max-w 1120 centered, 56px side padding
 *   - G05 title header
 *   - Two-column grid: 710 / 362 with gap-09 (48)
 *   - Left col: hero cover 710×399 · main G11 post · G24 helpfulness
 *                 · G23 header "N replies" · N × G11 (compact) replies
 *                 · M00 reply editor
 *   - Right col: G19 related topics (sticky on large screens)
 */
export function M00PostDetail({
  title = "Welcome to the Celonis Community: Your First Steps 👋",
  subtitle = "2 months ago • 3 replies • 35 views",
  coverImageSrc,
  author = DEFAULT_AUTHOR,
  mainBody = DEFAULT_MAIN_BODY,
  mainCallout = DEFAULT_MAIN_CALLOUT,
  mainExtra = DEFAULT_MAIN_EXTRA,
  replies = DEFAULT_REPLIES,
  onReplySubmit,
  className,
}: M00PostDetailProps) {
  return (
    <section
      data-node-id="12112:5294"
      data-name="M00-Post Detail"
      className={cn(
        "w-full bg-bg-base",
        "px-04 s:px-09",
        className,
      )}
    >
      <div className="mx-auto max-w-[1120px] flex flex-col">
        {/* Header (G05) */}
        <G05HeaderWidgetTitle title={title} subtitle={subtitle} />

        {/* Cols */}
        <div
          data-name="Cols"
          className={cn(
            "grid grid-cols-1",
            "m:grid-cols-[710px_362px] m:gap-09",
          )}
        >
          {/* Left col */}
          <div data-name="Col" className="flex flex-col">
            {/* Cover image 710 × 399 */}
            <div
              data-name="aspect-ratio"
              className={cn(
                "w-full rounded-m overflow-hidden",
                "aspect-[710/399]",
                "bg-gradient-to-br from-grey-100 via-grey-90 to-grey-black",
                "relative",
              )}
            >
              {coverImageSrc ? (
                <img
                  src={coverImageSrc}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                // Decorative subtle grid overlay when no image is supplied
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 70%)",
                  }}
                />
              )}
            </div>

            {/* Main post + helpfulness */}
            <div data-name="Main" className="flex flex-col pt-09">
              <G11QaTopicBlock
                author={author}
                body={mainBody}
                callout={mainCallout}
                extra={mainExtra}
              />
              <G24QaTopicHelpfulness />
            </div>

            {/* Replies list */}
            <div data-name="List" className="flex flex-col">
              <G23ListItemsHeader title={`${replies.length} replies`} />
              {replies.map((r, i) => (
                <div key={r.id}>
                  <div aria-hidden className="h-0 border-t border-border-low" />
                  <G11QaTopicBlock
                    compact
                    author={r.author}
                    body={r.body}
                  />
                  {i === replies.length - 1 ? (
                    <div aria-hidden className="h-0 border-t border-border-low" />
                  ) : null}
                </div>
              ))}
            </div>

            {/* Reply editor */}
            <M00ReplyEditor onSubmit={onReplySubmit} />
          </div>

          {/* Right col — related topics */}
          <aside data-name="Col" className="flex flex-col pt-06 m:pt-0">
            <div className="m:sticky m:top-[160px]">
              <G19RelatedTopics />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
