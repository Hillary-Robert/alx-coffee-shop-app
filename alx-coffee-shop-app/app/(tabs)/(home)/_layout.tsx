import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false, headerShown: false, }}>
      <Stack.Screen name="index" options={{ title: "Coffee" }} />
      <Stack.Screen name="coffee/[id]" options={{ title: "Details"}} />
    </Stack>
  );
}
