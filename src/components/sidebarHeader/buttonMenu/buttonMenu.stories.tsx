import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMenu } from "./buttonMenu";

const meta: Meta<typeof ButtonMenu> = {
  title: "Components/ButtonMenu",
  component: ButtonMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonMenu>;

export const Default: Story = {};