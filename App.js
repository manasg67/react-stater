
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Initial from './Screens/Initial';
import Provider from './Screens/Provider';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator
      initialRouteName='Initial'
    >
        
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Provider" component={Provider} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
