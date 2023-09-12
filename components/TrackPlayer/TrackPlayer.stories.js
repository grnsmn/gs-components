import React from "react";

import TrackPlayer from ".";

export default {
  title: "TrackPlayer",
  component: TrackPlayer,
  args: {},
};

const Template = (args) => <TrackPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {};
