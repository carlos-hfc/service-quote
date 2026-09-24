import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    height: 48,
    backgroundColor: COLORS["gray-100"],
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS["gray-300"],
  },
  field: {
    color: COLORS["gray-700"],
    height: 48,
    flex: 1,
    fontSize: TYPOGRAPHY["text-md"],
  },
  adornment: {
    height: 48,
    justifyContent: "center",
  },
  adornmentText: {
    fontSize: TYPOGRAPHY["text-md"],
    fontWeight: 700,
    color: COLORS["gray-600"],
  },
})
