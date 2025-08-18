import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Defina o componente da Tela Inicial
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Esta é a Tela Inicial</Text>
      <Button
        title="Ir para a Tela de Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

// 2. Defina o componente da Tela de Detalhes
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Esta é a Tela de Detalhes</Text>
      <Button
        title="Voltar para a Tela Inicial"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

// 3. Configure o Navegador na função principal do app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});