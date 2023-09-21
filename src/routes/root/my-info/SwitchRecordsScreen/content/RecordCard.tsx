import { Box, Flexbox, Typography, Button, Icon } from 'src/components/atom';
import { SwitchListItem } from 'src/components/molecule';
import { SwitchListItemProps } from 'src/components/molecule/SwitchListItem';

interface RecordCardProps extends Pick<SwitchListItemProps, 'data'> {
  date: string;
}

const RecordCard = ({ data, date }: RecordCardProps) => {
  const onCloseHandler = () => {
    alert(`${date}자 거래 기록을 삭제합니다.`);
  };

  const reviewHandler = () => {
    alert(`${date}자 거래에 평가를 남깁니다.`);
  };

  return (
    <Box>
      <Flexbox alignItems='center'>
        <Flexbox.Item flex={1}>
          <Typography fontSize={14}>{date}</Typography>
        </Flexbox.Item>
        <Box width={30}>
          <Button onPress={onCloseHandler} type={'transparent'} size={'small'}>
            <Icon name='close' size={24} />
          </Button>
        </Box>
      </Flexbox>
      <SwitchListItem
        data={data}
        onPress={reviewHandler}
        mirrorDirection='column'
      />
    </Box>
  );
};

export { RecordCard };
