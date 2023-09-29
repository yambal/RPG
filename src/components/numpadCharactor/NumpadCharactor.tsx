import { TilingSprite } from "@pixi/react"
import * as PIXI from 'pixi.js';
import React from "react";
import { N_E_W_S_Direction } from "../../app/types/N_E_W_S_Direction";

export type NumpadCharactorProps = {
  texture: PIXI.Texture<PIXI.Resource>
  textureSizeWidth?: number
  textureSizeHeight?: number
  tileSizeWidth?: number
  tilesizeHeight?: number
  charDirection: N_E_W_S_Direction
  textureMap: NumpadCharactorTextureMap,
  x: number,
  y: number
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

export const NumpadCharactor = ({
  texture,
  textureSizeWidth = 16,
  textureSizeHeight = 24,
  tileSizeWidth = 32,
  tilesizeHeight = 48,
  charDirection = 'south',
  textureMap,
  x,
  y
}: NumpadCharactorProps) => {

  const tilePosition = React.useMemo(() => {
    const texturePosition = textureMap[charDirection]
    return {
      x: texturePosition.texturePositionCol * -tileSizeWidth,
      y: texturePosition.texturePositionRow * -tilesizeHeight,
    }
  }, [charDirection, textureMap, tileSizeWidth, tilesizeHeight])

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
      x={x}
      y={y}
    />
  )
}