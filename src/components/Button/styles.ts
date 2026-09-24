import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderWidth: 1,
    borderRadius: 999,
    flexDirection: "row",
    gap: 8,
    borderColor: COLORS["purple-base"],
    backgroundColor: COLORS["purple-base"],
  },
  text: {
    fontSize: TYPOGRAPHY["title-sm"],
    fontWeight: 700,
    color: COLORS.white,
  },
  primary: {
    backgroundColor: COLORS["purple-base"],
    borderColor: COLORS["purple-base"],
  },
  secondary: {
    backgroundColor: COLORS["gray-100"],
    borderColor: COLORS["gray-300"],
  },
  danger: {
    backgroundColor: COLORS["gray-100"],
    borderColor: COLORS["gray-300"],
  },
  "text-primary": {
    color: COLORS.white,
  },
  "text-secondary": {
    color: COLORS["purple-base"],
  },
  "text-danger": {
    color: COLORS["danger-base"],
  },
})
