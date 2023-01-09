import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import * as actions from './action'

export const rentAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (rent) => rent.id
})
export const rentalSlice = createSlice({
  name: 'counter',
  initialState: rentAdapter.getInitialState({
    loading: 'idle'
  }),
  reducers: {
  },
  devTools: true,
  extraReducers: (builder) => {
    builder
      .addCase(actions.onSetRentList, (state, action) => {
        return rentAdapter.setAll(state, action.payload)
      })
      .addCase(actions.onDeleteRent, (state, action ) => {
        return rentAdapter.removeOne(state, action.payload)
      })
      .addCase (actions.onCreateRent, (state, action) => {
        return rentAdapter.addOne(state, action.payload)
      })
      .addDefaultCase((state) => state)
  },
})

export const action = rentalSlice.actions


export default rentalSlice.reducer