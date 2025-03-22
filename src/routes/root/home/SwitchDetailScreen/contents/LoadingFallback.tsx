import { useEffect } from 'react';
import {
  Animated,
  Easing,
  useAnimatedValue,
  useWindowDimensions,
  View,
} from 'react-native';
import { PADDING } from 'src/assets/theme/base';
import { ScreenWrapper } from 'src/components/template';

const LoadingFallback = () => {
  const { width, height } = useWindowDimensions();
  const blinkAnim = useAnimatedValue(0.2);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          easing: Easing.inOut(Easing.ease),
          duration: 1500,
          isInteraction: false,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0.2,
          easing: Easing.inOut(Easing.ease),
          duration: 1500,
          isInteraction: false,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkAnim]);

  return (
    <ScreenWrapper>
      <Animated.View
        style={{
          width,
          height: height / 3,
          backgroundColor: '#D0D0D5',
          opacity: blinkAnim,
        }}
      />
      <View
        style={{
          paddingHorizontal: PADDING.wrapper.horizontal,
          marginTop: 20,
          position: 'relative',
        }}
      >
        <View
          style={{
            rowGap: 5,
          }}
        >
          <Animated.View
            style={{
              width: '25%',
              height: 17,
              borderRadius: 10,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '70%',
              height: 25,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '20%',
              height: 12,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={{ rowGap: 5 }}>
          <Animated.View
            style={{
              width: '60%',
              height: 15,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '60%',
              height: 15,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '90%',
              height: 15,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '20%',
              height: 15,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            gap: 5,
            flexWrap: 'wrap',
          }}
        >
          <Animated.View
            style={{
              width: '50%',
              height: 12,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '40%',
              height: 12,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <Animated.View
            style={{
              width: '45%',
              height: 12,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
        </View>
        <Animated.View
          style={{
            width: '40%',
            height: 30,
            margin: 'auto',
            borderRadius: 5,
            backgroundColor: '#D0D0D5',
            opacity: blinkAnim,
          }}
        />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={{
              width: '40%',
              height: 30,
              borderRadius: 5,
              backgroundColor: '#D0D0D5',
              opacity: blinkAnim,
            }}
          />
          <View style={{ rowGap: 10 }}>
            <Animated.View
              style={{
                width: width / 3,
                height: 17,
                borderRadius: 5,
                backgroundColor: '#D0D0D5',
                opacity: blinkAnim,
              }}
            />
            <Animated.View
              style={{
                width: width / 3,
                height: 17,
                borderRadius: 5,
                backgroundColor: '#D0D0D5',
                opacity: blinkAnim,
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoadingFallback;
