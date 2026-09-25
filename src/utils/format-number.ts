export function formatCurrencyNumber(value: number) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(value)
    .slice(3)
}
