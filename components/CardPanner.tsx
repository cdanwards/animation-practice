import { useRef } from "react";
import { PanResponder, Animated, View, StyleSheet } from "react-native";
import Card, { Cards } from "./Card";

type CardPannerProps = {
  Card: React.FC;
  initialYPosition: number;
};

export default function CardPanner({
  Card,
  initialYPosition,
}: CardPannerProps) {
  //   const pan = useRef(new Animated.ValueXY()).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -1000,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: translateY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy < -100) {
          console.log("Swiping up");
          startAnimation();
        } else {
          console.log("Springing to origin");
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: initialYPosition,
            },
            { translateY: translateY },
            { scale },
          ],
          opacity: opacity,
        }}
        {...panResponder.panHandlers}
      >
        <Card />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
