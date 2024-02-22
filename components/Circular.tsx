import { useRef, useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function Circular() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // withTiming or withSpring
    console.log("Circular useEffect");
    Animated.loop(
      Animated.timing(progress, {
        toValue: 2 * Math.PI,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [progress]);

  const radius = 100.0;

  const x = progress.interpolate({
    inputRange: [0, 2 * Math.PI],
    outputRange: [radius * Math.cos(0), radius * Math.cos(2 * Math.PI)], // Simplify to -radius to radius if needed
  });
  const y = progress.interpolate({
    inputRange: [0, 2 * Math.PI],
    outputRange: [radius * Math.sin(0), radius * Math.sin(2 * Math.PI)], // Simplify to -radius to radius if needed
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                translateX: x,
              },
              {
                translateY: y,
              },
            ],
          },
        ]}
      />
      <Text style={styles.description}>Circular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
    borderRadius: 25,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    margin: 60,
  },
});
