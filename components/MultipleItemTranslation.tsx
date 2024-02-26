import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import Card, { CARD_WIDTH, Cards } from "./Card";

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            transform: [
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -CARD_WIDTH / 2],
                }),
              },
              {
                rotateZ: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [`${0}rad`, `${Math.PI / 6}rad`],
                }),
              },
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, CARD_WIDTH / 2],
                }),
              },
            ],
          }}
        >
          <Card type={Cards.Card2} />
        </Animated.View>
      </View>
      <Animated.View style={styles.overlay}>
        <View
          style={{
            transform: [],
          }}
        >
          <Card type={Cards.Card3} />
        </View>
      </Animated.View>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            transform: [
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -CARD_WIDTH / 2],
                }),
              },
              {
                rotateZ: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [`${0}rad`, `${-Math.PI / 6}rad`],
                }),
              },
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, CARD_WIDTH / 2],
                }),
              },
            ],
          }}
        >
          <Card type={Cards.Card1} />
        </Animated.View>
      </View>
    </View>
  );
};
