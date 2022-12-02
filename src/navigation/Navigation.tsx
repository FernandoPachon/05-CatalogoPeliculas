import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../screens/Details';
import { Home } from '../screens/Home';
import { Movie } from '../interfaces/MovieInterfaces';


export type RootStackParams = {
  HomeScreen: undefined;
  Details: Movie;
}

const Stack = createStackNavigator();

export const Navigation=()=>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
         // backgroundColor: 'white',
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
     
    </Stack.Navigator>
  );
}