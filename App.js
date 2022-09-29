
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './screens/List';
import Books from './screens/Books';

import BottomBar from './components/BottomBar';


const Stack = createStackNavigator();


const App = () => {
   return(
   <NavigationContainer>
     <BottomBar />  
   </NavigationContainer>

   )  

}


export default App;



// <Stack.Navigator    initialRouteName='Books'  screenOptions={{headerShown:false}}
// >
//  <Stack.Screen name="Books" component={Books} />
//  <Stack.Screen name="List"  component={List}      />
// </Stack.Navigator>