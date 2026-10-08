import { useNavigation } from "@react-navigation/native"
import { ChevronLeftIcon } from "lucide-react-native"
import { Text, TouchableOpacity, View } from "react-native"

import { COLORS } from "@/theme"

import { styles } from "./styles"

export function QuoteHeader() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={1}
      >
        <ChevronLeftIcon
          size={24}
          color={COLORS["gray-600"]}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Orçamento</Text>
    </View>
  )
}
