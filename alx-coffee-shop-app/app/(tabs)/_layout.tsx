
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#c67c4e",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: { backgroundColor: "#fff", height: 68, borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size ?? 24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag-handle-sharp" size={size ?? 24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="alert"
        options={{
          title: "Alert",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="notifications"
              size={size ?? 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>

    
  );
}
