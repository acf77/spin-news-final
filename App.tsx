import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  PlayfairDisplay_400Regular,
} from "@expo-google-fonts/playfair-display";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import { Routes } from "./src/routes/Routes";
import { ContextProvider } from "./src/context/Context";

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
