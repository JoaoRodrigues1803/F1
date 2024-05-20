import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Esteban from './Esteban';
import Pierre from './Esteban2';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Esteban' component={Esteban}
        />
        <Tab.Screen
          name='Pierre' component={Pierre}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
