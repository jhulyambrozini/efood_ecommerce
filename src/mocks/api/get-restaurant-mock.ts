import { HttpResponse, http } from 'msw'

export const getRestaurantMock = http.get(
  'https://fake-api-tau.vercel.app/api/efood/restaurantes/:id',
  ({ params }) => {
    const { id } = params

    return HttpResponse.json({
      id,
      titulo: 'Restaurante 1',
      destacado: true,
      tipo: 'italiana',
      avaliacao: 4.7,
      descricao: 'descrição restaurante 1',
      capa: 'img/img.png',
      cardapio: [
        {
          foto: 'img/img.png',
          preco: 69.9,
          id: 1,
          nome: 'comida 1',
          descricao: 'descriçao 1',
          porcao: '1 a 2 pessoas'
        },
        {
          foto: 'img/img.png',
          preco: 56.9,
          id: 2,
          nome: 'comida 2',
          descricao: 'descrição 2',
          porcao: '1 a 2 pessoas'
        },
        {
          foto: 'img/img.png',
          preco: 74.9,
          id: 3,
          nome: 'comida 3',
          descricao: 'descrição 3',
          porcao: '1 a 2 pessoas'
        },
        {
          foto: 'img/img.png',
          preco: 89.9,
          id: 4,
          nome: 'comida 4',
          descricao: 'decrição 4',
          porcao: '1 a 2 pessoas'
        }
      ]
    })
  }
)
