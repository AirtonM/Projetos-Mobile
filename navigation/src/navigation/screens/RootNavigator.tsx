import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import NotFoundScreen from "../screens/NotFoundScreen";

export type RootStackParamList = {
  Root: undefined;
  NotFound: { from?: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Ops! Página não encontrada" }}
      />
    </Stack.Navigator>
  );
}
