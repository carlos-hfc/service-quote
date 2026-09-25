import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  radio: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS["gray-400"],
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  inner: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: TYPOGRAPHY["text-md"],
    color: COLORS["gray-600"],
  },
})
