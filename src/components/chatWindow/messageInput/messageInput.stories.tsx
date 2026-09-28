import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { MessageInput } from "./messageInput";

const meta: Meta<typeof MessageInput> = {
  title: "Components/MessageInput",
  component: MessageInput,
  tags: ["autodocs"],
  args: {
    onSend: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {};

export const InContainer: Story = {
  render: (args) => (
    <div
      style={{
        width: "400px",
        padding: "16px",
        border: "1px solid #ddd",
      }}
    >
      <MessageInput {...args} />
    </div>
  ),
};
