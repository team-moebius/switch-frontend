import { Button, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const SubmitPhoneNumber = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Flexbox
        padding={'10%'}
        alignItems={'center'}
        flexDirection={'column'}
        mt={'30%'}
      >
        <Flexbox.Item mb={40}>
          <Typography fontSize={14}>
            사용하실 본인 명의의 휴대폰 번호를 입력해주세요.
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item>
          <Flexbox
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={16}
          >
            <Flexbox.Item>
              <Field
                width={'100%'}
                name={'phoneNumber'}
                fieldType={'textInput'}
                placeholder={'휴대폰 번호 입력'}
                value={''}
                onChange={() => {
                  console.debug('change phone number');
                }}
              />
            </Flexbox.Item>
            <Flexbox.Item>
              <Button
                wide
                type={'normal'}
                size={'middle'}
                onPress={() => {
                  navigation.navigate('SubmitValidationCode');
                }}
              >
                다음
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SubmitPhoneNumber };
