import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Rotation from "./components/Rotation";
import Circular from "./components/Circular";
import MultipleItemTranslation from "./components/MultipleItemTranslation";
import OptionsSelector from "./components/OptionsSelector";
import Carousel from "./components/Carousel";
import CursorGestureHandler from "./components/CursorGestureHandler";

const options = [
  { value: "rotation", label: "Rotation", component: <Rotation /> },
  { value: "circular", label: "Circular", component: <Circular /> },
  {
    value: "transform",
    label: "Multiple Items Translation",
    component: <MultipleItemTranslation />,
  },
  {
    value: "carousel",
    label: "Carousel",
    component: <Carousel />,
  },
  {
    value: "cursorGestureHandler",
    label: "Cursor Gesture Handler",
    component: <CursorGestureHandler />,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <OptionsSelector options={options} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
