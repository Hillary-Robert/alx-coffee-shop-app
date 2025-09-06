import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/header";
import CoffeeCard from "@/components/coffeeCard";
import { COFFEE_CARDS } from "@/samples";
import "@/styles/global.css";
import { router } from "expo-router";


export default function Home() {

  const [query, setQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white">
    
      <Header query={query} setQuery={setQuery} />
      <View className="flex-1">
      
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
        >
        
          <View className="w-full flex-row flex-wrap justify-between">
           
            {COFFEE_CARDS.map((item) => (
              <View key={item.id} style={{ width: "48%", marginBottom: 14 }}>
              
                <CoffeeCard
                  {...item}
                  onPress={() =>
                    router.push({
                      pathname: "/coffee/[id]",
                      params: { id: String(item.id) },
                    })
                  }
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
