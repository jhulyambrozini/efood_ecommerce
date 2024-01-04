import { HttpResponse, http } from 'msw'

export const postPurchaseMock = http.post(
  'https://fake-api-tau.vercel.app/api/efood/checkout',
  async () => {
    const orderId = '123456'
    return HttpResponse.json({ orderId }, { status: 201 })
  }
)
