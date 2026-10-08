import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS["gray-200"],
  },
  title: {
    fontSize: TYPOGRAPHY["title-lg"],
    fontWeight: 700,
    color: COLORS["purple-base"],
  },
  subtitle: {
    fontSize: TYPOGRAPHY["text-sm"],
    color: COLORS["gray-500"],
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  form: {
    flexDirection: "row",
    gap: 8,
  },
  formInput: {
    flex: 1,
  },
  list: {
    width: "100%",
    gap: 8,
  },
  filter: {
    gap: 16,
  },
  filterText: {
    fontSize: TYPOGRAPHY["text-xs"],
    color: COLORS["gray-500"],
  },
  filterItems: {
    gap: 12,
  },
})
