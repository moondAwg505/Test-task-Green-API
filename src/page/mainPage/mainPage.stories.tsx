import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./mainPage";

const meta: Meta<typeof MainPage> = {
  title: "Pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {};
