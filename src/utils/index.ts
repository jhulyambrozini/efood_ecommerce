export const getDescription = (desc: string) => {
  if (desc.length > 210) {
    return desc.slice(0, 207) + '...'
  }
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
