import type { Meta, StoryObj } from "@storybook/react";
import { MessageBubble } from "./messageBubble";

const meta: Meta<typeof MessageBubble> = {
  title: "Components/MessageBubble",
  component: MessageBubble,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MessageBubble>;

export const MyMessage: Story = {
  args: {
    message: {
      id: "1",
      text: "Hello! How are you?",
      fromMe: true,
      createdAt: new Date().toISOString(),
    },
  },
};

export const TheirMessage: Story = {
  args: {
    message: {
      id: "2",
      text: "I'm fine, thanks!",
      fromMe: false,
      createdAt: new Date().toISOString(),
    },
  },
};

export const LongMessage: Story = {
  args: {
    message: {
      id: "3",
      text: "This is a very long message that demonstrates how the component behaves when the text spans multiple lines and needs to wrap correctly inside the chat bubble.",
      fromMe: true,
      createdAt: new Date().toISOString(),
    },
  },
};