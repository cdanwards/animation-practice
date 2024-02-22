import { useRef, useEffect } from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

export default function Circular() {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // withTiming or withSpring
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start(() => {
      progress.setValue(0);
    });
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                rotate: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
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
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    paddingTop: 30,
    width: 20,
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
