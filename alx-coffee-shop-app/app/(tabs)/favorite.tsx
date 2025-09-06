import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoffeeCard from "@/components/coffeeCard";
import { COFFEE_CARDS } from "@/samples";
import "@/styles/global.css";


const STATIC_FAV_IDS = [1, 3, 5];

export default function Favorite() {
  const favorites = COFFEE_CARDS.filter((c) =>
    STATIC_FAV_IDS.includes(Number(c.id))
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 pt-4 pb-2">
        <Text className="text-xl font-semibold">Favorites</Text>
        <Text className="text-gray-400 mt-1">
          {favorites.length} item{favorites.length !== 1 ? "s" : ""}
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24, paddingTop: 12 }}
      >
        {favorites.length === 0 ? (
          <View className="mt-24 items-center">
            <Text className="text-5xl mb-3">🤎</Text>
            <Text className="text-lg font-semibold mb-1">No favorites yet</Text>
           
          </View>
        ) : (
          <View className="w-full flex-row flex-wrap justify-between">
            {favorites.map((item) => (
              <View key={item.id} style={{ width: "48%", marginBottom: 14 }}>
                <CoffeeCard {...item} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
