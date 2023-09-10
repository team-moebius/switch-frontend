import { useState } from 'react';

import { Flexbox, Toggle } from 'src/components/atom';

import { ScreenWrapper } from 'src/components/template';
import { HistoryListContent } from './content/HistoryListContent';
import { ItemListContent } from './content/ItemListContent';

const HomeMainScreen = ({ navigation }) => {
  const [isItemView, setIsItemView] = useState<boolean>(true);

  return (
    <ScreenWrapper>
      <Flexbox
        height={'100%'}
        justifyContent={'center'}
        flexDirection={'column'}
        pt={50}
      >
        {isItemView ? (
          <ItemListContent navigation={navigation} />
        ) : (
          <HistoryListContent />
        )}
        <Flexbox
          height={'10%'}
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Toggle
            value={!isItemView}
            handleOnPress={() => {
              setIsItemView((prev) => !prev);
            }}
          />
        </Flexbox>
      </Flexbox>
    </ScreenWrapper>
  );
};

export { HomeMainScreen };
