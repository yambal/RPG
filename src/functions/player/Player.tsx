import * as PIXI from 'pixi.js'
import chara from "../../images/numPadCharactor.png"
import { NumpadCharactor } from "../../components/numpadCharactor/NumpadCharactor"
import { CharDirection } from '../../app/types/CharDirection'

export type PlayerProps = {
  x: number
  y: number
  uiCharDirection: CharDirection
}

export const Player = ({
  x,
  y,
  uiCharDirection
}: PlayerProps) => {
  const charaTexture = PIXI.Texture.from(chara, {scaleMode: PIXI.SCALE_MODES.NEAREST})
  return (
    <NumpadCharactor
      texture={charaTexture}
      textureMap={{
        south: {texturePositionCol: 1, texturePositionRow: 0},
        north: {texturePositionCol: 1, texturePositionRow: 3},
        west: {texturePositionCol: 1, texturePositionRow: 1},
        east: {texturePositionCol: 1, texturePositionRow: 2},
      }}
      tileSizeWidth={64}
      tilesizeHeight={96}
      charDirection={uiCharDirection}
      x={x}
      y={y}
    />
  )
}