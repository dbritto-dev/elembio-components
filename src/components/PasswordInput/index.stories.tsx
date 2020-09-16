import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { PasswordInput, PasswordInputProps } from "./index";

export default {
  title: "Components/PasswordInput",
  component: PasswordInput,
} as Meta;

const Template: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

export const Standard = Template.bind({});

export const Filled = Template.bind({});

Filled.args = {
  variant: "filled",
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
};
