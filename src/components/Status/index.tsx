import { Text, View, ViewProps } from "react-native"

import { styles } from "./styles"

export type StatusType = "sent" | "draft" | "approved" | "declined"

interface StatusProps extends ViewProps {
  status: StatusType
}

const statusMap: Record<StatusType, string> = {
  approved: "Aprovado",
  declined: "Recusado",
  draft: "Rascunho",
  sent: "Enviado",
}

export function Status({ status, style, ...props }: StatusProps) {
  return (
    <View
      style={[styles.container, styles[status], style]}
      {...props}
    >
      <View style={[styles.dot, styles[`${status}-dot`]]} />
      <Text style={[styles.text, styles[`${status}-text`]]}>
        {statusMap[status]}
      </Text>
    </View>
  )
}
