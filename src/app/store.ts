import { configureStore } from '@reduxjs/toolkit'

import inputReducer from '../functions/input/inputSlice'
import regionReducer from '../functions/region/regionSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    region: regionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch