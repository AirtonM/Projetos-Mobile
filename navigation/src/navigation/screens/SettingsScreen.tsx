import * as React from "react";
import { View, Text, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const nav = useNavigation();
  const [dark, setDark] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  React.useEffect(() => {
    nav.setOptions({ title: "App Settings" });
  }, [nav]);

  return (
    <View style={{ flex: 1, padding: 16, gap: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Settings</Text>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text>Modo escuro</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text>Notificações</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </View>
  );
}
