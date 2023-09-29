import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputDirection } from '../../app/types/InputDirection'
import { N_E_W_S_Direction } from '../../app/types/N_E_W_S_Direction'
import { MoveToTargetDirection } from '../../app/types/MoveToTargetDirection'

export type PlayerPosition = {
  x: number
  y: number
}

export type PlayerState = {
  charDirection: N_E_W_S_Direction
  playerMoveToTarget: N_E_W_S_Direction | null
  position: PlayerPosition
}

export const initialState: PlayerState = {
  charDirection: "south",
  playerMoveToTarget: null,
  position: {
    x: 0,
    y: 0,
  }
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerCharDirection: (state, action: PayloadAction<{charDirection: N_E_W_S_Direction}>) => {
      state.charDirection = action.payload.charDirection
    },
    setPlayerPosition: (state, action: PayloadAction<{playerPosition: PlayerPosition}>) => {
      state.position = action.payload.playerPosition
    },
    setPlayerMoveToTarget: (state, action: PayloadAction<{playerMovingToDirection: MoveToTargetDirection}>) => {
      state.playerMoveToTarget = action.payload.playerMovingToDirection
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
export const { setPlayerCharDirection, setPlayerPosition, movePlayerTo, setPlayerMoveToTarget } = playerSlice.actions

export default playerSlice.reducer