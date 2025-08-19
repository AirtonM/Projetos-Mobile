import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Task'>;

export function TaskScreen({ route, navigation }: Props) {
  const { taskId, taskName, onRemove } = route.params;

  const handleRemove = () => {
    // Chama a função de callback passada via navegação
    if (onRemove) {
      onRemove(taskId);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>
      <Text style={styles.taskName}>{taskName}</Text>
      <Button title="Remover" onPress={handleRemove} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  taskName: { fontSize: 18, marginBottom: 20 },
});