import { TilingSprite } from "@pixi/react"
import * as PIXI from 'pixi.js';
import React from "react";

export type NumpadCharactorProps = {
  texture: PIXI.Texture<PIXI.Resource>
  textureSizeWidth?: number
  textureSizeHeight?: number
  tileSizeWidth?: number
  tilesizeHeight?: number
  direction?: Direction
  textureMap: NumpadCharactorTextureMap
}

type NumpadCharactorTextureMap = {
  south: TexturePosition
  north: TexturePosition
  west: TexturePosition
  east: TexturePosition
}

type TexturePosition = {
  texturePositionCol: number
  texturePositionRow: number
}

type Direction = 'south' | 'north' | 'west' | 'east'

export const NumpadCharactor = ({
  texture,
  textureSizeWidth = 16,
  textureSizeHeight = 24,
  tileSizeWidth = 32,
  tilesizeHeight = 48,
  direction = 'south',
  textureMap
}: NumpadCharactorProps) => {

  const tilePosition = React.useMemo(() => {
    const texturePosition = textureMap[direction]
    return {
      x: texturePosition.texturePositionCol * -tileSizeWidth,
      y: texturePosition.texturePositionRow * -tilesizeHeight,
    }
  }, [direction, textureMap, tileSizeWidth, tilesizeHeight])

  const tileScale = React.useMemo(() => {
    return {
      x: tileSizeWidth / textureSizeWidth,
      y: tilesizeHeight / textureSizeHeight,
    }
  }, [textureSizeWidth, textureSizeHeight, tileSizeWidth, tilesizeHeight])

  return (
    <TilingSprite
      texture={texture}
      tileScale={tileScale}
      width={tileSizeWidth}
      height={tilesizeHeight}
      tilePosition={tilePosition}
    />
  )
}