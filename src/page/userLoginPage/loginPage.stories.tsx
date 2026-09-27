import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./loginPage";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <LoginPage />
    </div>
  ),
};