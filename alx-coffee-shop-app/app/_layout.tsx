import "react-native-reanimated"; 
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@/styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
       <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: { backgroundColor: "#000" },
        }}
      />
      
    </SafeAreaProvider>
  );
}