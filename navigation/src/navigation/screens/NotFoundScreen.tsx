import * as React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";

type NotFoundRoute = RouteProp<RootStackParamList, "NotFound">;

export default function NotFoundScreen() {
  const navigation = useNavigation();
  const route = useRoute<NotFoundRoute>();
  const from = route.params?.from ?? "desconhecido";

  return (
    <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>404</Text>
      <Text style={{ opacity: 0.7, textAlign: "center" }}>
        Tela não encontrada. Origem: {from}
      </Text>

      <Button title="Voltar para Home" onPress={() => navigation.navigate("Home" as never)} />
    </View>
  );
}
