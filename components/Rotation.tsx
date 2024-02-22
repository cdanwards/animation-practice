import { useRef, useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function Rotation() {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // withTiming or withSpring
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            toValue: 0.5,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.spring(scale, {
            toValue: 2,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: /* progress.value * 2 * Math.PI */ progress.interpolate(
                  {
                    inputRange: [0.5, 1],
                    outputRange: [`${Math.PI}rad`, `${2 * Math.PI}rad`],
                  }
                ),
              },
            ],
          },
        ]}
      />
      <Text style={styles.description}>Rotation</Text>
    </View>
  );
}

const SIZE = 100.0;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "red",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    margin: 60,
  },
});
