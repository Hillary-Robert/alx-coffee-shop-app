// components/CoffeeCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { CoffeeCardProp } from "@/interfaces";

type Props = CoffeeCardProp & { onPress?: () => void };

const CoffeeCard: React.FC<Props> = ({
  image,
  rating,
  title,
  subtitle,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
     
      style={{ width: "100%" }}
      className="bg-white rounded-2xl shadow-sm"
    >
      
      <View style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden", position: "relative" }}>
        <Image source={image} style={{ width: "100%", height: 120 }} resizeMode="cover" />

        
        <View style={{ position: "absolute", top: 8, right: 8 }} className="flex-row items-center bg-black/60 px-2 py-1 rounded-full">
          <Ionicons name="star" size={14} color="#f5c518" />
          <Text className="text-white ml-1">{rating.toFixed(1)}</Text>
        </View>
      </View>

      <View className="px-3 py-2">
        <Text className="text-black font-semibold text-lg">{title}</Text>
        {!!subtitle && <Text className="text-gray-500 text-sm">{subtitle}</Text>}

        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-black text-xl font-semibold">€ {price.toFixed(2)}</Text>
          <View className="bg-[#c67c4e] rounded-xl p-3">
            <Ionicons name="add" size={18} color="#fff" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;
