import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeTabs'>;

export function Updates({ route }: Props) {
  const taskCount = route.params?.taskCount || 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status</Text>
      <Text style={styles.countText}>Você tem {taskCount} tarefas pendentes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  countText: { fontSize: 18 },
});