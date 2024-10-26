import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Flexbox } from 'src/components/atom';
import { COLORS } from 'src/assets/theme/base';

export default {
  title: 'Flexbox',
  component: Flexbox,
} as Meta<typeof Flexbox>;

const Template: StoryFn<typeof Flexbox> = (args) => (
  <>
    <Flexbox {...args}>
      <Flexbox.Item flex={1} backgroundColor={'red'}>
        item 1
      </Flexbox.Item>
      <Flexbox.Item flex={2} backgroundColor={'green'}>
        item 2
      </Flexbox.Item>
      <Flexbox.Item flex={3} backgroundColor={'orange'}>
        item 3
      </Flexbox.Item>
      <Flexbox.Item flex={1} backgroundColor={'blue'}>
        item 4
      </Flexbox.Item>
    </Flexbox>
    <Flexbox {...args} width={200}>
      <Flexbox.Item width={100} backgroundColor={'red'}>
        item 1
      </Flexbox.Item>
      <Flexbox.Item width={100} backgroundColor={'green'}>
        item 2
      </Flexbox.Item>
      <Flexbox.Item width={100} backgroundColor={'orange'}>
        item 3
      </Flexbox.Item>
      <Flexbox.Item width={100} backgroundColor={'blue'}>
        item 4
      </Flexbox.Item>
    </Flexbox>
  </>
);

export const FlexBoxTemplate = Template.bind({});

FlexBoxTemplate.storyName = 'container';
FlexBoxTemplate.args = {
  flexDirection: 'row',
  backgroundColor: COLORS.neutral.black,
  border: '1 solid orange',
  padding: 12,
  gap: 4,
};
