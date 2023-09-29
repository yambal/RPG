import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputDirection } from '../../app/types/InputDirection'
import { CharDirection } from '../../app/types/CharDirection'

export type PlayerState = {
  direction: CharDirection
  position: PlayerPosition
}

export type PlayerPosition = {
  x: number
  y: number
}

export const initialState: PlayerState = {
  direction: "south",
  position: {
    x: 0,
    y: 0,
  }
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerDirection: (state, action: PayloadAction<{charDirection: CharDirection}>) => {
      state.direction = action.payload.charDirection
    },
    setPlayerPosition: (state, action: PayloadAction<{playerPosition: PlayerPosition}>) => {
      state.position = action.payload.playerPosition
    },
    movePlayerTo: (state, action: PayloadAction<{inputDirection: InputDirection}>) => {
      switch(action.payload.inputDirection){
        case 'east':
          state.position.x += 8
          return
        case 'west':
          state.position.x -= 8
          return
        case 'south':
          state.position.y += 8
          return
        case 'north':
          state.position.y -= 8
          return
        default:
          return
      }
    }
  },
})

// Action creators are generated for each case reducer functionddd
export const { setPlayerDirection, setPlayerPosition, movePlayerTo } = playerSlice.actions

export default playerSlice.reducer