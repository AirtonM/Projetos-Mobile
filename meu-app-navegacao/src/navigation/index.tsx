import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Updates } from '../screens/Updates';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

// 1. Defina os tipos para o Navegador de Abas
export type HomeTabParamList = {
  Home: { taskCount?: number }; // Home agora pode receber a contagem de tarefas
  Updates: { taskCount?: number }; // Updates pode receber a contagem
};

// 2. Defina os tipos para o Navegador de Pilha
export type RootStackParamList = {
  HomeTabs: undefined;
  Task: { taskId: string, taskName: string }; // Tela de detalhes da tarefa
  Settings: undefined;
  Profile: undefined;
};

const HomeTabs = createBottomTabNavigator<HomeTabParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeTabs"
        component={HomeTabsNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Task" component={TaskScreen} />
      <RootStack.Screen name="Settings" component={Settings} />
      <RootStack.Screen name="Profile" component={Profile} />
    </RootStack.Navigator>
  );
}

function HomeTabsNavigator() {
  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen name="Home" component={Home} />
      <HomeTabs.Screen name="Updates" component={Updates} />
    </HomeTabs.Navigator>
  );
}