import { Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Alert() {
  return (
    <SafeAreaView>
    <View className='flex items-center justify-center'>
      <Text>This is Alert Page</Text>
    </View>
    </SafeAreaView>
  )
}
