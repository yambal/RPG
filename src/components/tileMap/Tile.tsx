import { TilingSprite } from "@pixi/react"
import React from 'react';
import * as PIXI from 'pixi.js';
/*
 * 
 * @returns 
 * 
 * @see
 * https://pixijs.com/examples/sprite/tiling-sprite
 * https://pixijs.io/pixi-react/components/TilingSprite/
 * 
 */

export type TileProps = {
  texture: PIXI.Texture<PIXI.Resource>
  tileSize?: number
  textureSize?: number
  texturePositionCol?: number
  texturePositionRow?: number
  positionCol?: number
  positionRow?: number
} 

export const Tile = ({
  texture,
  tileSize = 32,
  textureSize = 16,
  texturePositionCol = 0,
  texturePositionRow = 0,
  positionCol = 0,
  positionRow = 0,
}:TileProps) => {

  const tilePosition = React.useMemo(() => {
    return {
      x: texturePositionCol * -tileSize,
      y: texturePositionRow * -tileSize
    }
  }, [texturePositionCol, texturePositionRow, tileSize])
  

  const position = React.useMemo(() => {
    return {
      x: positionCol * tileSize,
      y: positionRow * tileSize
    }
  }, [positionCol, positionRow, tileSize])

  const tileScale = React.useMemo(() => {
    return {
      x: tileSize / textureSize,
      y: tileSize / textureSize,
    }
  }, [textureSize, tileSize])

  return (
    <TilingSprite
      texture={texture}
      tileScale={tileScale}
      width={tileSize}
      height={tileSize}
      tilePosition={tilePosition}
      x={position.x}
      y={position.y}
    />
  )

}