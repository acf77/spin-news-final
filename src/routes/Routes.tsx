import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../pages/home";
import { AddNews } from "../pages/AddNews";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="None">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNews" component={AddNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
