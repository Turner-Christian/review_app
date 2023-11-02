import 'react-native-gesture-handler';
import React, { useState, useCallback } from "react";
import { useFontLoader } from "./components/FontLoader";
import { Navigator } from "./components/Navigator";
import { DrawNav } from './components/DrawNav';
import { View} from 'react-native'
export default function App() {
  // BELOW CODE IS THE FONT LOADER AND HANDLER
  const { fontsLoaded, onLayoutRootView } = useFontLoader();
  if (!fontsLoaded) {
    return null;
  }


  // ACTUAL APP COMPONENT
  return (
    <>
      <DrawNav onLayout={onLayoutRootView} />
    </>
  )
}
