import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function App() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState('');

  useEffect(() => {
    // Simulamos a busca de dados de uma API com um temporizador de 2 segundos.
    setTimeout(() => {
      console.log('Dados buscados!');
      setDados('Avaliação Realizada!');
      setCarregando(false);
    }, 2000);
  }, []); // O array vazio garante que isso rode apenas uma vez!

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.textoCarregando}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoDados}>{dados}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textoCarregando: {
    marginTop: 10,
    fontSize: 18,
    color: '#666',
  },
  textoDados: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
