import { Text, View } from "react-native"

import { formatCurrencyNumber } from "@/utils/format-number"

import { Status, StatusType } from "../Status"
import { styles } from "./styles"

interface CardProps {
  data: {
    title: string
    customerName: string
    price: number
    status: StatusType
  }
}

export function Card({ data }: CardProps) {
  return (
    <View style={styles.container}>
      <Status
        status={data.status}
        style={styles.status}
      />

      <View style={styles.info}>
        <Text
          style={styles.infoTitle}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {data.title}
        </Text>

        <Text style={styles.infoDescription}>{data.customerName}</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.currency}>R$</Text>
        <Text style={styles.value}>{formatCurrencyNumber(data.price)}</Text>
      </View>
    </View>
  )
}
