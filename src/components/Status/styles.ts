import { StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    height: 24,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS["info-light"],
    borderRadius: 6,
  },
  text: {
    fontSize: TYPOGRAPHY["title-xs"],
    fontWeight: 700,
    color: COLORS["info-dark"],
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: COLORS["info-base"],
    borderRadius: 999,
  },
  approved: {
    backgroundColor: COLORS["success-light"],
  },
  declined: {
    backgroundColor: COLORS["danger-light"],
  },
  draft: {
    backgroundColor: COLORS["gray-300"],
  },
  sent: {
    backgroundColor: COLORS["info-light"],
  },
  "approved-dot": {
    backgroundColor: COLORS["success-base"],
  },
  "declined-dot": {
    backgroundColor: COLORS["danger-base"],
  },
  "draft-dot": {
    backgroundColor: COLORS["gray-400"],
  },
  "sent-dot": {
    backgroundColor: COLORS["info-base"],
  },
  "approved-text": {
    color: COLORS["success-dark"],
  },
  "declined-text": {
    color: COLORS["danger-dark"],
  },
  "draft-text": {
    color: COLORS["gray-500"],
  },
  "sent-text": {
    color: COLORS["info-dark"],
  },
})
