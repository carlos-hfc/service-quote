import { Dimensions, StyleSheet } from "react-native"

import { COLORS, TYPOGRAPHY } from "@/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBlockColor: COLORS["gray-200"],
    padding: 20,
    gap: 20,
  },
  fieldset: {
    borderWidth: 1,
    borderColor: COLORS["gray-200"],
    borderRadius: 10,
    padding: 16,
    gap: 12,
  },
  legend: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS["gray-200"],
    gap: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: -16,
  },
  legendText: {
    color: COLORS["gray-500"],
    fontSize: TYPOGRAPHY["text-xs"],
  },
  listStatus: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  status: {
    width: (Dimensions.get("window").width - 32 * 2 - 24) / 2,
  },
  listServices: {
    gap: 20,
  },
  service: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-sm"],
    color: COLORS["gray-700"],
  },
  serviceDescription: {
    fontSize: TYPOGRAPHY["text-xs"],
    color: COLORS["gray-500"],
  },
  servicePrice: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 3,
  },
  serviceCurrency: {
    fontSize: TYPOGRAPHY["text-xs"],
    color: COLORS["gray-700"],
  },
  serviceValue: {
    fontWeight: 700,
    fontSize: TYPOGRAPHY["title-md"],
    color: COLORS["gray-700"],
  },
  serviceQty: {
    textAlign: "right",
    fontSize: TYPOGRAPHY["text-xs"],
    color: COLORS["gray-600"],
  },
  subtotal: {
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  subtotalText: {
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["text-sm"],
    flex: 1,
  },
  qtyTotal: {
    color: COLORS["gray-600"],
    fontSize: TYPOGRAPHY["text-xs"],
  },
  subtotalValue: {
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["text-sm"],
  },
  discount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  discountText: {
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["text-sm"],
  },
  discountField: {
    width: 75,
    height: 32,
  },
  discountValue: {
    color: COLORS["danger-base"],
    fontSize: TYPOGRAPHY["text-sm"],
    textAlign: "right",
    flex: 1,
  },
  total: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: COLORS["gray-200"],
    backgroundColor: COLORS["gray-100"],
    marginHorizontal: -16,
    marginBottom: -16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  totalText: {
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["text-sm"],
    fontWeight: 700,
  },
  totalValues: {
    alignItems: "flex-end",
  },
  totalPrice: {
    color: COLORS["gray-600"],
    textDecorationLine: "line-through",
    fontSize: TYPOGRAPHY["text-xs"],
  },
  totalQuotePrice: {
    fontWeight: 700,
    color: COLORS["gray-700"],
    fontSize: TYPOGRAPHY["title-lg"],
  },
  footer: {
    padding: 20,
    paddingBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  addService: {
    flexDirection: "row",
    gap: 8,
  },
  addServiceValue: {
    flex: 1,
  },
  addServiceQty: {
    width: 110,
  },
})
