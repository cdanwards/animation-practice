import { useRef, useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function Circular() {
  const progress = useRef(new Animated.Value(0)).current;
  const animatedViewRef = useRef<View>(null);

  useEffect(() => {
    // withTiming or withSpring
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  progress.addListener(({ value }) => {
    // calculate the angle of the circle
    const angle = Math.PI * 2 * value;
    // calculate the x and y based on the angle
    const x = 100 * Math.cos(angle);
    const y = 100 * Math.sin(angle);
    // set the position of the animated view
    if (animatedViewRef.current) {
      (animatedViewRef.current as any).setNativeProps({
        style: { transform: [{ translateX: x }, { translateY: y }] },
      });
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedView} ref={animatedViewRef} />
      <Text style={styles.description}>Circular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    paddingTop: 30,
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
