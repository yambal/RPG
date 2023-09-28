import { configureStore } from '@reduxjs/toolkit'

import inputReducer from '../functions/input/inputSlice'
import playerReducer from '../functions/player/playerSlice'

export const store = configureStore({
  reducer: {
    input: inputReducer,
    player: playerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch