
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import ActivitieOne from './src/Screens/ActivitieOne';
import ActivitieTwo from './src/Screens/ActivitieTwo/ActivitieTwo';
import HomeScreen from './src/Screens/Home/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        {/**Home Screen*/}
        <Stack.Screen 
          name = "Home" 
          component = {HomeScreen}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 1 */}
        <Stack.Screen  
          name = "A1" 
          component = {ActivitieOne}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 2 */}
        <Stack.Screen  
          name = "A2" 
          component = {ActivitieTwo}
          options = {{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
