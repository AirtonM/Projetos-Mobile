import * as React from "react";
import { View, Text, Button } from "react-native";
import { TabScreenProps } from "../navigation/BottomTabs";

export default function HomeScreen({ navigation }: TabScreenProps<"Home">) {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Home</Text>

      <Button
        title="Ir para Profile (userId=123)"
        onPress={() => navigation.navigate("Profile", { userId: "123" })}
      />

      <Button
        title="Ver Updates"
        onPress={() => navigation.navigate("Updates")}
      />

      <Button
        title="Abrir Settings"
        onPress={() => navigation.navigate("Settings")}
      />

      <Button
        title="Forçar NotFound"
        color="#cc3333"
        onPress={() =>
          navigation.getParent()?.navigate("NotFound" as never, { from: "Home" } as never)
        }
      />
    </View>
  );
}
