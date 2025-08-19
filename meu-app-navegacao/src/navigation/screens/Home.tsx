import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation'; // Importa os tipos de navegação

type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabs'>;

export function Home({ navigation }: Props) {
  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]);
  const [taskText, setTaskText] = useState('');

  // Use useEffect para atualizar a contagem de tarefas sempre que a lista muda
  useEffect(() => {
    // Navega para a tela de updates e passa a contagem de tarefas como parâmetro
    navigation.navigate('Updates', { taskCount: tasks.length });
  }, [tasks, navigation]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now().toString(), name: taskText };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const handleRemoveTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => navigation.navigate('Task', { taskId: item.id, taskName: item.name, onRemove: handleRemoveTask })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicionar nova tarefa..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Adicionar" onPress={handleAddTask} />

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  taskItem: { padding: 15, borderWidth: 1, borderColor: '#eee', marginBottom: 10 },
  list: { marginTop: 20 },
});