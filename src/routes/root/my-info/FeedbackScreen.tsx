import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Box,
  Button,
  Flexbox,
  Textarea,
  Typography,
} from 'src/components/atom';
import { ScreenWrapper } from 'src/components/template';

const FeedbackScreen = () => {
  const [report, setReport] = useState<string>('');

  const onChangeTextHandler = (str: string) => {
    setReport(str);
  };

  const onClickHandler = () => {
    alert('제출했습니다.');
  };

  return (
    <ScreenWrapper>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
          <Box height={'100%'} padding={10}>
            <Textarea
              placeholder='스위치에 남기고 싶은 말씀을 적어주세요.'
              maxLength={1000}
              value={report}
              onChangeText={onChangeTextHandler}
              style={{ height: '70%', padding: 10 }}
            />
            <Flexbox mt={30} justifyContent='center'>
              <Box width={'70%'}>
                <Button type={'normal'} size={'large'} onPress={onClickHandler}>
                  피드백 보내기
                </Button>
              </Box>
            </Flexbox>
          </Box>
        </KeyboardAvoidingView>
      </ScrollView>
    </ScreenWrapper>
  );
};

export { FeedbackScreen };
