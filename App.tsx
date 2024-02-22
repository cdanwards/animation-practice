import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Rotation from "./components/Rotation";
import Circular from "./components/Circular";

export default function App() {
  return (
    <View style={styles.container}>
      <Rotation />
      <Circular />
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
  },
});
