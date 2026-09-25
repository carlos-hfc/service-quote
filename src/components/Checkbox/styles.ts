import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS["gray-400"],
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: TYPOGRAPHY["text-md"],
    color: COLORS["gray-600"],
  },
})
