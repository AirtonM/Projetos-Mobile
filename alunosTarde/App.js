import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Olá alunos do período da tarde.</Text>
          <Button
        title="Clique aqui"
        onPress={() => alert('Botão clicado!')}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '30px',
  },
});
