// app/(tabs)/cart.tsx
import React, { useMemo, useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COFFEE_CARDS } from "@/samples";

const ACCENT = "#c67c4e";

export default function OrderScreen() {
  const params = useLocalSearchParams<{ id?: string; qty?: string; size?: string }>();

  const item = useMemo(() => {
    if (params.id) {
      const found = COFFEE_CARDS.find((c) => String(c.id) === String(params.id));
      if (found) return found;
    }
    return COFFEE_CARDS[0];
  }, [params.id]);

  const [method, setMethod] = useState<"deliver" | "pickup">("deliver");
  const [qty, setQty] = useState<number>(Number(params.qty ?? 1) || 1);
  const [size] = useState<"S" | "M" | "L">(
    (["S", "M", "L"].includes((params.size ?? "").toUpperCase()) ? (params.size as any).toUpperCase() : "M") as any
  );

  const priceEach = item?.price ?? 0;
  const subtotal = +(priceEach * qty).toFixed(2);
  const deliveryBefore = method === "deliver" ? 2.0 : 0;
  const deliveryNow = method === "deliver" ? 1.0 : 0;
  const total = +(subtotal + deliveryNow).toFixed(2);

  return (
    <SafeAreaView className="flex-1 bg-white">
    
      <View className="flex-row items-center px-5 pt-2 pb-3">
        <Pressable onPress={() => router.back()} hitSlop={8} className="pr-3 py-2">
          <Ionicons name="chevron-back" size={22} color="#111" />
        </Pressable>
        <View className="flex-1 items-center">
          <Text className="text-lg font-semibold">Order</Text>
        </View>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 pb-8">
  
          <View className="bg-gray-100 rounded-3xl p-1 flex-row">
            <Pressable
              onPress={() => setMethod("deliver")}
              className={`flex-1 py-3 rounded-2xl items-center ${
                method === "deliver" ? "bg-[#c67c4e]" : "bg-transparent"
              }`}
            >
              <Text className={`font-semibold ${method === "deliver" ? "text-white" : "text-gray-800"}`}>Deliver</Text>
            </Pressable>
            <Pressable
              onPress={() => setMethod("pickup")}
              className={`flex-1 py-3 rounded-2xl items-center ${
                method === "pickup" ? "bg-[#c67c4e]" : "bg-transparent"
              }`}
            >
              <Text className={`font-semibold ${method === "pickup" ? "text-white" : "text-gray-800"}`}>Pick Up</Text>
            </Pressable>
          </View>

       
          {method === "deliver" && (
            <View className="mt-6">
              <Text className="text-lg font-semibold">Delivery Address</Text>
              <Text className="mt-3 text-base font-semibold">Jl. Kpg Sutoyo</Text>
              <Text className="text-gray-400">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>

              <View className="flex-row gap-3 mt-3">
                <OutlineChip label="Edit Address" onPress={() => {}} />
                <OutlineChip label="Add Note" onPress={() => {}} />
              </View>
            </View>
          )}

          
          <View className="h-px bg-gray-200 my-5" />

          
          <View className="flex-row items-center">
            <View className="rounded-2xl overflow-hidden bg-gray-100">
              {item?.image ? (
                <Image source={item.image} className="w-[56px] h-[56px]" />
              ) : (
                <View className="w-[56px] h-[56px] bg-gray-200" />
              )}
            </View>

            <View className="flex-1 ml-3">
              <Text className="text-base font-semibold">{item?.title ?? "Coffee"}</Text>
              <Text className="text-gray-400">Deep Foam{size ? ` • ${size}` : ""}</Text>
            </View>

           
            <View className="flex-row items-center">
              <CircleBtn onPress={() => setQty((q) => Math.max(1, q - 1))} label="–" />
              <Text className="mx-4 text-base">{qty}</Text>
              <CircleBtn onPress={() => setQty((q) => q + 1)} label="+" />
            </View>
          </View>

         
          <View className="mt-6 rounded-2xl border border-gray-200 bg-white px-4 py-4 flex-row items-center justify-between">
            <Text className="font-medium">1 Discount is Applied</Text>
            <Ionicons name="chevron-forward" size={18} color="#111" />
          </View>

        
          <View className="mt-8">
            <Text className="text-lg font-semibold">Payment Summary</Text>

            <RowLine label="Price" value={`$ ${subtotal.toFixed(2)}`} />

            {method === "deliver" ? (
              <RowLine
                label="Delivery Fee"
                value={
                  <View className="flex-row items-center">
                    <Text className="text-gray-400 line-through mr-2">$ {deliveryBefore.toFixed(1)}</Text>
                    <Text className="text-black">$ {deliveryNow.toFixed(1)}</Text>
                  </View>
                }
              />
            ) : (
              <RowLine label="Delivery Fee" value="$ 0.0" />
            )}
          </View>

         
          <View className="mt-6 rounded-3xl bg-white p-4 shadow shadow-black/5">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="wallet-outline" size={18} color={ACCENT} />
                <Text className="ml-2 text-base font-semibold">Cash/Wallet</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-[${ACCENT}] text-[#c67c4e] font-semibold">$ {total.toFixed(2)}</Text>
                <Ionicons name="chevron-down" size={16} color="#111" style={{ marginLeft: 4 }} />
              </View>
            </View>

            <Pressable
              onPress={() => {}}
              className="mt-5 bg-[#c67c4e] py-4 rounded-2xl items-center"
            >
              <Text className="text-white font-semibold text-base">Order</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



function OutlineChip({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="px-4 py-2 rounded-2xl border border-gray-300 bg-white"
    >
      <Text className="font-medium">{label}</Text>
    </Pressable>
  );
}

function CircleBtn({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center"
      hitSlop={8}
    >
      <Text className="text-lg">{label}</Text>
    </Pressable>
  );
}

function RowLine({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode | string;
}) {
  return (
    <View className="flex-row items-center justify-between mt-4">
      <Text className="text-base text-gray-700">{label}</Text>
      {typeof value === "string" ? (
        <Text className="text-base text-black">{value}</Text>
      ) : (
        value
      )}
    </View>
  );
}
