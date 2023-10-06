import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { N_E_W_S_Direction } from '../../app/types/N_E_W_S_Direction'
import { InputDirection } from '../../app/types/InputDirection'
import { RegionPosition } from '../../app/types/RegionPosition'

export type RegionState = {
  player: {
    position: RegionPosition
    moveToDirection: N_E_W_S_Direction | null
    moveToPosition: RegionPosition | null
    uiCharDirection: N_E_W_S_Direction
  }
}

export const initialState: RegionState = {
  player: {
    position: {
      x: 0,
      y: 0
    },
    moveToDirection: null,
    moveToPosition: null,
    uiCharDirection: 'south'
  }

}

/**
 * 移動を開始する
 * @param state
 * @param inputDirection 
 * @returns 
 */
const startMove = (state: RegionState, inputDirection: N_E_W_S_Direction) => {
  state.player.moveToDirection = inputDirection
  state.player.uiCharDirection = inputDirection
  switch(inputDirection){
    case 'north':
      state.player.moveToPosition = {
        x: state.player.position.x,
        y: state.player.position.y - 1
      }
      break
    case 'east':
      state.player.moveToPosition = {
        x: state.player.position.x + 1,
        y: state.player.position.y
      }
      break
    case 'west':
      state.player.moveToPosition = {
        x: state.player.position.x - 1,
        y: state.player.position.y
      }
      break
    case 'south':
      state.player.moveToPosition = {
        x: state.player.position.x,
        y: state.player.position.y + 1
      }
      break
  }
  move(state, inputDirection)
}

const move = (state: RegionState, direction: N_E_W_S_Direction) => {
  switch(direction) {
    case 'north':
      state.player.position.y -= 0.125
      return
    case 'east':
      state.player.position.x += 0.125
      return
    case 'west':
      state.player.position.x -= 0.125
      return
    case 'south':
      state.player.position.y += 0.125
      return
  }
}

export const regionSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    /**
     * Tick 毎に呼び出す
     * @param state
     * @param action 
     * @returns 
     */
    onRegionTick: (state, action: PayloadAction<{inputDirection: InputDirection}>) => {

      // Player
      if (!state.player.moveToPosition) {
        if (action.payload.inputDirection) {
          // 移動スタート
          startMove(state, action.payload.inputDirection)
        }
      } else if (
        state.player.position.x === state.player.moveToPosition.x
        && state.player.position.y === state.player.moveToPosition.y
      ) {
        // 到着
        if (action.payload.inputDirection) {
          // キーダウンしているなら移動スタート
          startMove(state, action.payload.inputDirection)
          return
        }
        // 停止
        state.player.moveToDirection = null
        state.player.moveToPosition = null
      } else if (state.player.moveToDirection) {
        // 移動
        move(state, state.player.moveToDirection)
      }
    }
  },
})

export const { onRegionTick } = regionSlice.actions
export default regionSlice.reducer