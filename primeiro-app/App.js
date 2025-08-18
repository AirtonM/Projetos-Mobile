import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, Alunos do FormaPARÁ!</Text>
      <Button
        title="Clique aqui"
        onPress={() => alert('Botão clicado!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue'
  },
});

