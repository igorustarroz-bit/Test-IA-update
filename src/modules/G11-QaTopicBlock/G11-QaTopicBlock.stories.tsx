import type { Meta, StoryObj } from "@storybook/react";
import { G11QaTopicBlock, G12Callout } from "./G11-QaTopicBlock";

const meta: Meta<typeof G11QaTopicBlock> = {
  title: "Modules/G11 – Qa topic block",
  component: G11QaTopicBlock,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof G11QaTopicBlock>;

export const MainPost: Story = {
  args: {
    author: {
      avatarSrc: "https://i.pravatar.cc/128?img=32",
      role: "New participant",
      name: "Just in Time",
      glossa: "asked in",
      context: "Got a general question?",
    },
    body: (
      <>
        {"Welcome to the Celonis Community! 👋 Here's what you need to know to get started, connect with others, and make the most of your experience.\n\nWhy join the community?\n\nThe Celonis Community is where people like you—members, experts, learners, and change makers—come together to ask questions, share insights, and grow. Whether you're just beginning your journey or have deep product knowledge, this space is here to support you.\n\nWhen you join the conversation, you not only get answers—you help shape the community for everyone.\n\nI'm new here. What's the best way to begin?\n\nWelcome! A good first step is to review our Community Guidelines and Community FAQ."}
      </>
    ),
    callout: (
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
            Head over to <a className="underline" href="#community-connect">Community Connect</a> to say hello and meet other members.
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
    ),
    extra: (
      <>
        {`If there are specific categories that pique your interest, consider subscribing to them. This will ensure you receive notifications whenever new discussions start within those areas, so you don't miss a thing!\n\nGot questions? You might find the answer in our `}
        <a className="underline" href="#faqs">Celonis Community FAQs</a>
        {`, so we recommend checking there first. If not, don't hesitate to reach out to the Celonis Community Team at community@celonis.com!\n\nWe're so glad you're here—take your time exploring, connect with others, and enjoy being part of the Celonis Community! 😊`}
      </>
    ),
  },
};

export const Reply: Story = {
  args: {
    compact: true,
    author: {
      avatarSrc: "https://i.pravatar.cc/128?img=14",
      role: "New participant",
      name: "Jane Doe",
      glossa: "replied",
    },
    body: "A preview of the details to question being asked",
    callout: undefined,
    extra: undefined,
  },
};
