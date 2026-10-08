import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
    padding: 20,
    flexDirection: "row",
  },
  text: {
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-sm"],
    color: COLORS["gray-700"],
    flex: 1,
  },
})
