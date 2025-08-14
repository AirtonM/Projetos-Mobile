import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Pressable,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Obtenha a largura da tela para criar um layout responsivo
const { width } = Dimensions.get('window');

// Defina uma interface para o nosso objeto de perfil, usando TypeScript
interface Perfil {
  nome: string;
  ocupacao: string;
  bio: string;
  fotoUrl: string;
}

const dadosPerfil: Perfil = {
  nome: "Ana Paula Silva",
  ocupacao: "Desenvolvedora Mobile",
  bio: "Apaixonada por tecnologia e criando aplicativos incríveis com React Native. Junte-se a mim nessa jornada!",
  fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
};

export default function App() {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    // ScrollView permite rolar o conteúdo quando ele excede a tela
    <ScrollView style={styles.container}>
      
      {/* Componente que exibe a imagem de perfil */}
      <View style={styles.header}>
        <Image
          source={{ uri: dadosPerfil.fotoUrl }}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nome}>{dadosPerfil.nome}</Text>
        <Text style={styles.ocupacao}>{dadosPerfil.ocupacao}</Text>
      </View>

      {/* Ícones de redes sociais */}
      <View style={styles.redesSociais}>
        <Icon name="github" size={30} style={styles.icone} />
        <Icon name="linkedin" size={30} style={styles.icone} />
        <Icon name="instagram" size={30} style={styles.icone} />
      </View>

      {/* Seção de biografia */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Sobre Mim</Text>
        <Text style={styles.bio}>{dadosPerfil.bio}</Text>
      </View>

      {/* Botão para abrir o modal */}
      <Pressable
        style={styles.botao}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.textoBotao}>Mostrar Detalhes</Text>
      </Pressable>

      {/* Componente Modal para exibir um pop-up */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalCentralizado}>
          <View style={styles.modalConteudo}>
            <Text style={styles.tituloModal}>Detalhes do Perfil</Text>
            <Text>Nome: {dadosPerfil.nome}</Text>
            <Text>Ocupação: {dadosPerfil.ocupacao}</Text>
            <Pressable
              style={styles.botaoFechar}
              onPress={() => setModalVisivel(false)}
            >
              <Text style={styles.textoBotaoFechar}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    // Exemplo de estilo específico para cada plataforma
    paddingTop: Platform.OS === 'ios' ? 50 : 20, 
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  fotoPerfil: {
    width: width * 0.4, // Largura responsiva (40% da tela)
    height: width * 0.4, // Altura igual à largura
    borderRadius: (width * 0.4) / 2, // Deixa a imagem redonda
    borderWidth: 3,
    borderColor: '#ccc',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ocupacao: {
    fontSize: 16,
    color: 'gray',
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icone: {
    marginHorizontal: 15,
    color: '#333',
  },
  secao: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalCentralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalConteudo: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  tituloModal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botaoFechar: {
    marginTop: 20,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  textoBotaoFechar: {
    color: '#333',
    fontWeight: 'bold',
  },
});