import type { Meta, StoryObj } from "@storybook/react";
import { SidebarHeader } from "./sidebarHeader";

const meta: Meta<typeof SidebarHeader> = {
  title: "Components/SidebarHeader",
  component: SidebarHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SidebarHeader>;

export const Default: Story = {};