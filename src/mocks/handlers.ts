// src/mocks/handlers.js
import { HttpResponse, http } from 'msw'
import { setupWorker } from 'msw/browser'

const handlers = [
  http.get('https://fake-api-tau.vercel.app/api/efood/restaurantes', () => {
    return HttpResponse.json([
      {
        id: 1,
        titulo: 'Bella Tavola Italiana',
        destacado: true,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao:
          'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
        capa: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
        cardapio: [
          {
            foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp',
            preco: 69.9,
            id: 1,
            nome: 'Ravioli al Tartufo Nero',
            descricao:
              'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
            porcao: '1 a 2 pessoas'
          },
          {
            foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg',
            preco: 56.9,
            id: 2,
            nome: 'Spaghetti alla Carbonara',
            descricao:
              'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
            porcao: '1 a 2 pessoas'
          },
          {
            foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg',
            preco: 74.9,
            id: 3,
            nome: 'Risotto ai Funghi Porcini',
            descricao:
              'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
            porcao: '1 a 2 pessoas'
          }
        ]
      }
    ])
  })
]

export { handlers }
export const worker = setupWorker(...handlers)
