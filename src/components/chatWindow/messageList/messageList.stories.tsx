import type { Meta, StoryObj } from "@storybook/react";
import { MessageList } from "./messageList";

const meta: Meta<typeof MessageList> = {
  title: "Components/MessageList",
  component: MessageList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MessageList>;

export const Default: Story = {
  args: {
    messages: [
      {
        id: "1",
        text: "Hello!",
        fromMe: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        text: "Hi! How are you?",
        fromMe: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: "3",
        text: "I'm fine, thanks.",
        fromMe: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: "4",
        text: "Great to hear that!",
        fromMe: true,
        createdAt: new Date().toISOString(),
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        height: "500px",
        width: "400px",
        padding: "16px",
        border: "1px solid #ddd",
      }}
    >
      <MessageList {...args} />
    </div>
  ),
};