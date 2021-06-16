
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from './src/Screens/Home/HomeScreen';
import ActivitieOne from './src/Screens/ActivitieOne';
import ActivitieTwo from './src/Screens/ActivitieTwo/ActivitieTwo';
import ActivitieThree from './src/Screens/ActivitieThree/ActivitieThree';
import ActivitieFour from './src/Screens/ActivitieFour/ActivitieFour';
import ActivitieFive from './src/Screens/ActivitieFive/ActivitieFive';
import LoginHome from './src/Screens/ActivitieFive/components/LoginHome';
import LoginHomeDos from './src/Screens/ActivitieSix/components/LoginHomeDos';
import ActivitieSix from './src/Screens/ActivitieSix/ActivitieSix';
import ActivitieSeven from './src/Screens/ActivitieSeven/ActivitieSeven';
import ActivitieEight from './src/Screens/ActivitieEight/ActivitieEight';
import ActivitieNine from './src/Screens/ActivitieNine/ActivitieNine';


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
        {/**Actividad 3 */}
        <Stack.Screen  
          name = "A3" 
          component = {ActivitieThree}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 4 */}
        <Stack.Screen  
          name = "A4" 
          component = {ActivitieFour}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 5 */}
        <Stack.Screen  
          name = "A5" 
          component = {ActivitieFive}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 6 */}
        <Stack.Screen  
          name = "A6" 
          component = {ActivitieSix}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 7 */}
        <Stack.Screen  
          name = "A7" 
          component = {ActivitieSeven}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 8 */}
        <Stack.Screen  
          name = "A8" 
          component = {ActivitieEight}
          options = {{
            headerShown: false
          }}
        />
        {/**Actividad 9 */}
        <Stack.Screen  
          name = "A9" 
          component = {ActivitieNine}
          options = {{
            headerShown: false
          }}
        />
        {/**Login Home */}
        <Stack.Screen  
          name = "LoginHome" 
          component = {LoginHome}
          options = {{
            headerShown: false
          }}
        />
        {/**Login Home 2*/}
        <Stack.Screen  
          name = "LoginHomeDos" 
          component = {LoginHomeDos}
          options = {{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
