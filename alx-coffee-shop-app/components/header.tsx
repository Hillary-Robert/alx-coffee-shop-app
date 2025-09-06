import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import { HeaderProps } from "@/interfaces";

export const Header: React.FC<HeaderProps> = ({ query, setQuery }) => {

  const { height: screenH } = useWindowDimensions();

  return (

    <View
      className="bg-[#121212] p-4 w-full mb-20"
      style={{ minHeight: screenH * 0.25 }}
    >
    
      <View className="mt-2 gap-2">
        
        <View>
          
          <Text className="text-gray-400">Location</Text>
          <View className="flex-row items-center gap-2 mt-1">
           
            <Text className="text-white">Kuopio, Finland</Text>
            <Image
              source={require("@/assets/images/coffeeShopIcons/downIcon.png")}
              style={{ width: 14, height: 14, tintColor: "#FFFFFF" }}
            />
          </View>
        </View>
        <View className="flex-row items-center gap-3">
         
          <View className="flex-1 flex-row items-center bg-[#1E1E1E] rounded-2xl px-4 h-12">
            
            <Image
              source={require("@/assets/images/coffeeShopIcons/searchIcon.png")}
              style={{
                width: 18,
                height: 18,
                tintColor: "#9CA3AF",
                marginRight: 8,
              }}
            />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#9CA3AF"
              value={query}
              onChangeText={setQuery}
              className="text-white flex-1"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            className="bg-[#1E1E1E] rounded-2xl p-3 items-center justify-center"
            onPress={() => {}}
            accessibilityLabel="Add"
          >
            
            <Image
              source={require("@/assets/images/coffeeShopIcons/Filet.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View className="rounded-xl overflow-hidden absolute w-full top-[8rem]">
         
          <ImageBackground
            source={require("@/assets/images/coffeeShopImages/banner.png")}
            style={{ width: "100%", height: screenH * 0.16 }}
            imageStyle={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          >
            
            <View className="bg-black/20 w-full h-full justify-start">
              
              <View className="px-4 py-3">
               
                <View className="bg-white/85 self-start px-5 py-2 rounded-lg mb-1">
                  
                  <Text className="text-[#3b2a20] font-semibold">
                    Promo
                  </Text>
                </View>
                <Text className="text-white text-lg font-semibold">
                 
                  Buy 5 Get 1 Free{" "}
                </Text>
                <Text className="text-gray-300">Only this weekend</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};
