import React,{useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scan from './screens/scan/index';
import MainScreen from "./screens/mainScreen";
import Call from './screens/call';
import Brief from './screens/brief';
import Detail from './screens/detail';
import DoorImage from './screens/image';


const Stack = createNativeStackNavigator();
function App() {
  
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="main" >
      <Stack.Screen name="main" component={MainScreen} options={{headerShown:false}}/>
      <Stack.Screen name="call" component={Call} />
      <Stack.Screen name="scan" component={Scan} />
      <Stack.Screen name="brief" component={Brief} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="image" component={DoorImage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;