import React from "react";

import Touchable from ".";

export default {
  title: "Touchable",
  component: Touchable,
  args: {},
};

const Template = (args) => <Touchable title="Hello Storybook" onPress={() => alert('Button pressed')} {...args} />;

export const Default = Template.bind({});
Default.args = {};
