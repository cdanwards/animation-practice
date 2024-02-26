import * as React from "react";
import {
  StatusBar,
  Animated,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const DATA = [
  {
    key: "3571572",
    title: "Multi-lateral intermediate moratorium",
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: require("../assets/houseplant1.png"),
  },
  {
    key: "3571747",
    title: "Automated radical data-warehouse",
    description:
      "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    image: require("../assets/houseplant2.png"),
  },
  {
    key: "3571680",
    title: "Inverse attitude-oriented system engine",
    description:
      "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    image: require("../assets/houseplant3.png"),
  },
  {
    key: "3571603",
    title: "Monitored global data-warehouse",
    description: "We need to program the open-source IB interface!",
    image: require("../assets/houseplant4.png"),
  },
];

const Indicator = ({ scrollX }: { scrollX: Animated.Value }) => {
  return (
    <View style={{ position: "absolute", bottom: 10, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "white",
              margin: 10,
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }: { scrollX: Animated.Value }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const Square = ({ scrollX }: { scrollX: Animated.Value }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "white",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.95,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Carousel = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        pagingEnabled
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
              }}
            >
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width / 2,
                    height: height / 3,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 24,
                    marginBottom: 10,
                    color: "white",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "300", color: "white" }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Carousel;
