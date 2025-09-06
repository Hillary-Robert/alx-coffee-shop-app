import React, { useMemo, useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { COFFEE_CARDS } from "@/samples"; 
import { Ionicons } from "@expo/vector-icons";

const ACCENT = "#c67c4e";

export default function CoffeeDetail() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const selectedId = Array.isArray(params.id) ? params.id[0] : params.id;

  const item = useMemo(
    () => COFFEE_CARDS.find((c) => String(c.id) === String(selectedId)),
    [selectedId]
  );

  const [expanded, setExpanded] = useState(false);
  const [size, setSize] = useState<"S" | "M" | "L">("M");

  if (!item) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Stack.Screen options={{ title: "Details" }} />
        <Text>Item not found.</Text>
      </SafeAreaView>
    );
  }

  const description =
    item.description ??
    "A cappuccino is an approximately 150 ml (5 oz) beverage with espresso and fresh milk foam, smooth and balanced—perfect any time of day.";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-5 pt-2 pb-3">
        <Pressable onPress={() => router.back()} hitSlop={8} className="pr-3 py-2">
          <Ionicons name="chevron-back" size={22} color="#111" />
        </Pressable>
        <View className="flex-1 items-center">
          <Text className="text-lg font-semibold">Coffee Info</Text>
        </View>
        <View style={{ width: 22 }} />
      </View>
      <Stack.Screen options={{ title: "Detail" }} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pt-5 pb-10">
         
          <View className="rounded-2xl overflow-hidden bg-gray-100">
            {item.image ? (
              <Image source={item.image} className="w-full h-[220px]" resizeMode="cover" />
            ) : item.image ? (
              <Image source={ item.image } className="w-full h-[220px]" resizeMode="cover" />
            ) : null}
          </View>

      
          <View className="mt-4 flex-row items-start justify-between">
            <View className="flex-1 pr-3">
              <Text className="text-2xl font-semibold">{item.title}</Text>
              {!!item.subtitle && <Text className="text-gray-400 mt-1">{item.subtitle}</Text>}
              <Text className="mt-3 text-base font-semibold">
                ★ {item.rating != null ? Number(item.rating).toFixed(1) : "—"}{" "}
                <Text className="text-gray-400">(230)</Text>
              </Text>
            </View>
          </View>

         
          <View className="h-px bg-gray-200 my-5" />

         
          <Text className="text-lg font-semibold">Description</Text>
          <Text className="text-gray-500 mt-2 leading-6" numberOfLines={expanded ? 0 : 3}>
            {description}
          </Text>
          <Pressable hitSlop={6} onPress={() => setExpanded((v) => !v)}>
            <Text className="mt-1 font-semibold text-[#c67c4e]">
              {expanded ? "Show Less" : "Read More"}
            </Text>
          </Pressable>

       
          <Text className="text-lg font-semibold mt-6">Size</Text>
          <View className="flex-row items-center justify-between mt-3">
            {(["S", "M", "L"] as const).map((s) => {
              const selected = size === s;
              return (
                <Pressable
                  key={s}
                  onPress={() => setSize(s)}
                  className={[
                    "flex-1 mx-1.5 py-3.5 rounded-2xl border items-center",
                    selected ? "border-[#c67c4e] bg-[#fff3ec]" : "border-gray-200 bg-white",
                  ].join(" ")}
                >
                  <Text className={selected ? "text-[#c67c4e] font-semibold" : "text-gray-900 font-semibold"}>
                    {s}
                  </Text>
                </Pressable>
              );
            })}
          </View>

        
          <View className="mt-6 bg-white rounded-2xl p-4 flex-row items-center justify-between shadow shadow-black/5">
            <View>
              <Text className="text-gray-400">Price</Text>
              <Text className="mt-1 text-2xl font-semibold text-[#c67c4e]">
                ${item.price != null ? Number(item.price).toFixed(2) : "--"}
              </Text>
            </View>

            <Pressable onPress={() => router.push("/(tabs)/cart")} className="bg-[#c67c4e] py-3.5 px-7 rounded-xl">
              <Text className="text-white font-semibold">Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
