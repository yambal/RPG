import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputDirection } from '../../app/types/InputDirection'

export interface CounterState {
  inputDirection: InputDirection
}

const initialState: CounterState = {
  inputDirection: null
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputDirection: (state, action: PayloadAction<{inputDirection: InputDirection}>) => {
      state.inputDirection = action.payload.inputDirection
    },
    clearInputDirection: (state, action: PayloadAction<{inputDirection: InputDirection}>) => {
      if (state.inputDirection === action.payload.inputDirection) {
        state.inputDirection = null
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setInputDirection, clearInputDirection } = inputSlice.actions

export default inputSlice.reducer