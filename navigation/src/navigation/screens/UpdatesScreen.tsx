import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { TabScreenProps } from "../navigation/BottomTabs";

type UpdateItem = { id: string; title: string; date: string; notes: string };

const DATA: UpdateItem[] = [
  { id: "1.2.0", title: "Melhorias de performance", date: "2025-08-10", notes: "Ajustes no cache e otimização." },
  { id: "1.1.0", title: "Novo botão na Home", date: "2025-08-01", notes: "Pequenas correções de layout." },
  { id: "1.0.0", title: "Lançamento inicial", date: "2025-07-15", notes: "Primeira versão estável." },
];

export default function UpdatesScreen({ navigation }: TabScreenProps<"Updates">) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 12 }}>Updates</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#ddd" }}
            onPress={() => navigation.navigate("Profile", { userId: item.id })}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.id} — {item.title}</Text>
            <Text style={{ opacity: 0.6 }}>{new Date(item.date).toLocaleDateString()}</Text>
            <Text style={{ marginTop: 4 }}>{item.notes}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
