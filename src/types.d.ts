declare interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurants = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: Menu[]
}

declare type FormValues = {
  name: string
  zipCode: string
  number: string
  adress: string
  city: string
  complement: string
  cardName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}
