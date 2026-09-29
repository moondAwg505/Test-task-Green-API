import type { Meta, StoryObj } from "@storybook/react";
import { AddContactForm } from "./addContactForm";

const meta: Meta<typeof AddContactForm> = {
  title: "Components/AddContactForm",
  component: AddContactForm,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AddContactForm>;

export const Default: Story = {};

export const InContainer: Story = {
  render: () => (
    <div
      style={{
        width: "320px",
        padding: "16px",
      }}
    >
      <AddContactForm />
    </div>
  ),
};
