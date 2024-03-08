import { useRef } from "react";
import { View, Text, Animated, useWindowDimensions } from "react-native";

const CURSOR_SIDE_SIZE = 40;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const CursorGestureHandler = () => {
  const dimensions = useWindowDimensions();
  const touch = useRef(
    new Animated.ValueXY({
      x: dimensions.width / 2,
      y: dimensions.height / 2,
    })
  ).current;

  return (
    <View
      style={{ flex: 1 }}
      onStartShouldSetResponder={() => true}
      onResponderMove={(event) => {
        touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        });
      }}
      onResponderRelease={() => {
        Animated.spring(touch, {
          toValue: {
            x: dimensions.width / 2 + CURSOR_HALF_SIDE_SIZE,
            y: dimensions.height / 2 + CURSOR_HALF_SIDE_SIZE,
          },
          useNativeDriver: false,
        }).start();
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
          left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
          width: CURSOR_SIDE_SIZE,
          height: CURSOR_SIDE_SIZE,
          backgroundColor: "goldenrod",
          borderRadius: CURSOR_HALF_SIDE_SIZE,
        }}
      />
    </View>
  );
};

export default CursorGestureHandler;
