import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ChatList } from "./chatList";

const meta: Meta<typeof ChatList> = {
  title: "Components/ChatList",
  component: ChatList,
  tags: ["autodocs"],
  args: {
    onSelect: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof ChatList>;

const chats = [
  {
    id: "1",
    title: "John Doe",
    lastMessage: {
      text: "Hello! How are you?",
    },
  },
  {
    id: "2",
    title: "Frontend Team",
    lastMessage: {
      text: "The task is ready for review.",
    },
  },
  {
    id: "3",
    title: "Alex",
    lastMessage: {
      text: "See you tomorrow!",
    },
  },
];

export const Default: Story = {
  args: {
    chats,
    activeChatId: null,
  },
};

export const ActiveChat: Story = {
  args: {
    chats,
    activeChatId: "2",
  },
};

export const Empty: Story = {
  args: {
    chats: [],
    activeChatId: null,
  },
};

export const InSidebar: Story = {
  args: {
    chats,
    activeChatId: "1",
  },
  render: (args) => (
    <div
      style={{
        width: "320px",
        height: "500px",
        border: "1px solid #ddd",
      }}
    >
      <ChatList {...args} />
    </div>
  ),
};