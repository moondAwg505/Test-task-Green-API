import type { Meta, StoryObj } from "@storybook/react";
import { NewChatbutton } from "./newChatButton";

const meta: Meta<typeof NewChatbutton> = {
  title: "Components/NewChatButton",
  component: NewChatbutton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewChatbutton>;

export const Default: Story = {};

export const InContainer: Story = {
  render: () => (
    <div style={{ padding: "16px" }}>
      <NewChatbutton />
    </div>
  ),
};