import * as React from "react";
import { View, Text, Button } from "react-native";
import { RouteProp, useFocusEffect, useRoute, useNavigation } from "@react-navigation/native";
import { TabsParamList, TabScreenProps } from "../navigation/BottomTabs";

type ProfileRoute = RouteProp<TabsParamList, "Profile">;

export default function ProfileScreen({ navigation }: TabScreenProps<"Profile">) {
  const route = useRoute<ProfileRoute>();
  const userId = route.params?.userId ?? "sem-id";

  // Título dinâmico quando focado
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({ title: `Profile • ${userId}` });
    }, [navigation, userId])
  );

  return (
    <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Profile</Text>
      <Text>User ID: {userId}</Text>

      <Button
        title="Mudar userId para 999 (setParams)"
        onPress={() => navigation.setParams({ userId: "999" })}
      />

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
