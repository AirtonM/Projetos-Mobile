import * as React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UpdatesScreen from "../screens/UpdatesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootNavigator";

export type TabsParamList = {
  Home: undefined;
  Updates: undefined;
  Profile: { userId?: string } | undefined;
  // Settings não fica na Tab, mas mostramos exemplo de como "empilhar" ela:
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export type TabScreenProps<T extends keyof TabsParamList> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "Root">,
  NativeStackScreenProps<TabsParamList, T>
>;

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Button title="Settings" onPress={() => navigation.navigate("Settings" as never)} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Tab.Screen name="Updates" component={UpdatesScreen} options={{ title: "Updates" }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
        initialParams={{ userId: "42" }}
      />
      {/* Settings como tela *empilhada* dentro do mesmo stack de Tabs */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings", tabBarItemStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
}
