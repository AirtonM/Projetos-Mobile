// src/App.tsx
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootNavigator from "./navigation"; // <- aponta para src/navigation/index.tsx

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
