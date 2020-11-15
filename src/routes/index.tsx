import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import Login from '../screens/Login';
import Password from '../screens/Password';
import Home from '../screens/Home';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Main" component={Main} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Password" component={Password} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
