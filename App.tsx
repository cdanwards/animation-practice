import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Rotation from "./components/Rotation";
import Circular from "./components/Circular";
import MultipleItemTranslation from "./components/MultipleItemTranslation";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Rotation />
        {/* <Circular /> */}
        <MultipleItemTranslation />
      </ScrollView>
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
  scrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 100,
    // paddingBottom: 150,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
});
