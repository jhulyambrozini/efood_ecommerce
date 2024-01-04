import { HttpResponse, http } from 'msw'

export const getRestaurantsMock = http.get(
  'https://fake-api-tau.vercel.app/api/efood/restaurantes',
  async () => {
    return HttpResponse.json([
      {
        id: 1,
        titulo: 'restaurante 1',
        destacado: true,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 1',
        capa: 'img/img.png'
      },
      {
        id: 2,
        titulo: 'restaurante 2',
        destacado: false,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 2',
        capa: 'img/img.png'
      },
      {
        id: 3,
        titulo: 'restaurante 3',
        destacado: false,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 3',
        capa: 'img/img.png'
      }
    ])
  }
)
