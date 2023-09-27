import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputDirection } from '../../app/types/InputDirection'

export interface CounterState {
  direction: InputDirection
}

const initialState: CounterState = {
  direction: null
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setDirection: (state, action: PayloadAction<{direction: InputDirection}>) => {
      state.direction = action.payload.direction
    },
    clearDirection: (state, action: PayloadAction<{direction: InputDirection}>) => {
      if (state.direction === action.payload.direction) {
        state.direction = null
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDirection, clearDirection } = inputSlice.actions

export default inputSlice.reducer