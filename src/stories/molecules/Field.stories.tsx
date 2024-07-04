import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Field } from 'src/components/molecule';

import { Box } from 'src/components/atom';

export default {
  title: 'Field',
  component: Field,
} as Meta<typeof Field>;

type Region = '서울' | '대구' | '부산';
type Person = {
  name: string;
  region: Region;
  ageOver18: boolean;
  married: boolean;
  agreed: boolean;
};

const WIDTH = 300;
const Template: StoryFn<typeof Field> = () => {
  const [state, setState] = useState<Person>({
    name: '',
    region: '서울',
    ageOver18: false,
    married: false,
    agreed: false,
  });

  const changeHandler = (change: Partial<Person>) => {
    setState((prev) => ({ ...prev, ...change }));
  };

  const { name, region, ageOver18, married, agreed } = state;

  return (
    <Box>
      <Field
        width={WIDTH}
        fieldType={'textInput'}
        name={'name'}
        label={'이름'}
        value={name}
        onChange={changeHandler}
      />
      <Field
        width={WIDTH}
        fieldType={'select'}
        name={'region'}
        options={['서울', '대구', '부산']}
        label={'거주 지역'}
        value={region}
        onChange={changeHandler}
      />
      <Field
        width={WIDTH}
        fieldType={'check'}
        name={'ageOver18'}
        label={'18세 이상'}
        value={ageOver18}
        onChange={changeHandler}
      />
      <Field
        width={WIDTH}
        fieldType={'radio'}
        name={'married'}
        label={'미혼/기혼'}
        value={married}
        onChange={changeHandler}
      />
      <Field
        width={WIDTH}
        fieldType={'toggle'}
        name={'agreed'}
        label={'동의'}
        value={agreed}
        onChange={changeHandler}
      />
    </Box>
  );
};

export const story = Template.bind({});

story.storyName = 'default';
story.args = {};
