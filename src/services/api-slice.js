import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createEntityAdapter } from '@reduxjs/toolkit'

export const rentAdapter = createEntityAdapter({
  selectId: (rent) => rent.id,
})

export const apiSlice = createApi({
  reducerPath: 'rent',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rent-418f1-default-rtdb.firebaseio.com' }),
  endpoints: (build) => ({
    getRents: build.query({
      query: () => `/rents.json`,
      transformResponse: (rents) => {
        const rentArray = Object.keys(rents).reduce((result, key) => {
          result.push({ ...rents[key], id: key })
          return result;
        }, [])
        return rentAdapter.setAll(rentAdapter.getInitialState(), rentArray)
      },
    }),
    postRent: build.mutation({
      query: (data) => {
        return {
          url: `/rents.json`,
          method: 'POST',
          body: data,
        }
      }
    }),
    deleteRent: build.mutation({
      query: (id) => {
        return {
          url: `/${id}.json`,
          method: 'DELETE'
        }
      }
    })
  }),
})


export const { useGetRentsQuery, usePostRentMutation, useDeleteRentMutation } = apiSlice