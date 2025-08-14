// src/navigation/index.tsx
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* importe suas screens a partir da pasta screens */
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UpdatesScreen from "./screens/UpdatesScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ userId: "42" }} />
      {/* Se quiser esconder Settings da tab, coloque aqui e depois oculte via tabBarItemStyle */}
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "404" }} />
    </Stack.Navigator>
  );
}
