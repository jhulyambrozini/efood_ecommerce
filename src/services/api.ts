import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id)=> `restaurantes/${id}`
    }),
  })
})

export const {useGetRestaurantQuery, useGetRestaurantsListQuery} = api
export default api
