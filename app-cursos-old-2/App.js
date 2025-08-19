// Arquivo: app-cursos/App.js

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ListaCursos from './src/components/ListaCursos'; // 1. IMPORTAMOS NOSSO COMPONENTE

export default function App() {
 return (
  <SafeAreaView style={styles.container}>
   <StatusBar barStyle="dark-content" />
   <ListaCursos />
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
 },
});
