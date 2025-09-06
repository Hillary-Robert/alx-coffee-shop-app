import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import "@/styles/global.css";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1">
      
      <View className="w-full h-[60%]" pointerEvents="none">
        <Image
          source={require("../assets/images/coffeeShopImages/splashImage.png")}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>

      <View className="flex-1 bg-black items-center w-full gap-4 px-8 pb-8 pt-6">
        <Text className="text-white font-semibold text-[32px] text-center leading-[40px]">
          Fall in Love With Coffee in Blissful Delight
        </Text>
        <Text className="text-[#a2a2a2] text-lg text-center">
          Welcome to our cozy coffee corner, where every cup is a delight for you.
        </Text>

        <View className="w-full mt-4">
          
          <Link href="/(tabs)/(home)" asChild>
            <TouchableOpacity
              className="w-full bg-[#c67c4e] py-4 px-5 rounded-xl"
              activeOpacity={0.7}
              accessibilityRole="button"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              
            >
              <Text className="text-white text-center font-semibold text-base">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link> 
        </View>
      </View>
    </View>
  );
}
