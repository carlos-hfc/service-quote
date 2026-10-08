import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

import { styles } from "./styles"

export function Layout(props: SafeAreaViewProps) {
  return (
    <SafeAreaView
      style={styles.container}
      {...props}
    />
  )
}
