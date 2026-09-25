import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS["gray-100"],
    borderWidth: 1,
    borderColor: COLORS["gray-200"],
    width: 350,
    position: "relative",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
  },
  status: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  info: {
    gap: 8,
    flexShrink: 1,
  },
  infoTitle: {
    color: COLORS["gray-700"],
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-md"],
  },
  infoDescription: {
    color: COLORS["gray-600"],
    fontSize: TYPOGRAPHY["text-sm"],
  },
  price: {
    alignItems: "baseline",
    flexDirection: "row",
    gap: 4,
  },
  currency: {
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["text-xs"],
  },
  value: {
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-md"],
  },
})
