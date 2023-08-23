import { Button, Flexbox, Typography } from 'src/components/atom';
import { Field } from 'src/components/molecule';
import { ScreenWrapper } from 'src/components/template';

const SubmitValidationCode = () => {
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
            휴대폰 번호로 전송된 인증 코드를 입력해주세요.
          </Typography>
        </Flexbox.Item>
        <Flexbox.Item mb={50}>
          <Flexbox flexDirection={'column'} gap={16}>
            <Field
              width={'100%'}
              name={'phoneNumber'}
              disabled={true}
              fieldType={'textInput'}
              placeholder={'휴대폰 번호 입력'}
              value={'01012345678'}
              onChange={() => {
                console.debug('change phone number');
              }}
            />
            <Field
              width={'100%'}
              name={'phoneNumber'}
              fieldType={'textInput'}
              placeholder={'인증 코드 입력'}
              value={''}
              onChange={() => {
                console.debug('change phone number');
              }}
            />
          </Flexbox>
        </Flexbox.Item>
        <Flexbox.Item>
          <Flexbox height={'100%'} flexDirection={'column'} gap={8}>
            <Flexbox.Item>
              <Button
                type={'normal'}
                size={'middle'}
                onPress={() => {
                  alert('가입');
                }}
              >
                가입
              </Button>
            </Flexbox.Item>
            <Flexbox.Item width={'auto'}>
              <Button
                type={'transparent'}
                size={'middle'}
                onPress={() => {
                  alert('코드 재전송');
                }}
              >
                코드재전송
              </Button>
            </Flexbox.Item>
          </Flexbox>
        </Flexbox.Item>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { SubmitValidationCode };
