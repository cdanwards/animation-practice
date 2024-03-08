import React from "react";
import { View } from "react-native";

import Card, { Cards } from "./Card";
import CardPanner from "./CardPanner";

export default function Swipe() {
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      {/* <CardPanner
        Card={() => <Card type={Cards.Card1} />}
        initialYPosition={50}
      /> */}

      <CardPanner
        Card={() => <Card type={Cards.Card2} />}
        initialYPosition={0}
      />
      {/* <CardPanner
        Card={() => <Card type={Cards.Card3} />}
        initialYPosition={-50}
      /> */}
    </View>
  );
}
