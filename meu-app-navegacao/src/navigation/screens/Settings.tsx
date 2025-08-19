import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export function Settings({ navigation }: Props) {
  const handleClearList = () => {
    // Você precisaria de um contexto ou estado global para isso.
    // Como estamos usando apenas useState, vamos voltar para a tela inicial
    // e pedir ao usuário para limpar a lista manualmente.
    // Em um projeto real, usaríamos uma biblioteca de estado (Redux, etc.).
    alert('Função de limpar lista não implementada sem um estado global.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Button title="Limpar Lista" onPress={handleClearList} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});