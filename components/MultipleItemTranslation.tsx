import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default function MultipleItemTranslation() {
  return (
    <View style={styles.container}>
      <Card title="Rotation" description="Rotate and scale" />
      <Card title="Circular" description="Rotate in a circle" />
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
  cardContainer: {
    // marginTop: 100,
    flex: 1,
    backgroundColor: "salmon",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    minWidth: 300,
    minHeight: 180,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});
