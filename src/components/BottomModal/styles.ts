import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: COLORS.white,
    insetInline: 0,
    bottom: 0,
    borderEndStartRadius: 16,
    borderStartStartRadius: 16,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  header: {
    gap: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-sm"],
    color: COLORS["gray-700"],
  },
  content: {
    borderBlockColor: COLORS["gray-200"],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 20,
    paddingBottom: 32,
    gap: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    padding: 20,
    paddingBottom: 40,
  },
})
