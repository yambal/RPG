import { Container } from "@pixi/react"
import * as PIXI from 'pixi.js'
import { Tile, TileProps } from "./Tile";
import React from "react";

export type TileMapProps = {
  texture: PIXI.Texture<PIXI.Resource>,
  tileSize: number,
  textureSize: number,
  tileMapData: TileMapData
}

export type TileMapData = TileCols[]

type TileCols = TileMapTileProps[]

type TileMapTileProps = Omit<TileProps, `texture` | 'tileSize' >

export const TileMap = ({
  texture,
  tileSize,
  textureSize,
  tileMapData
}: TileMapProps) => {

  const Tiles = React.useMemo(() => {
    return tileMapData.map((row, indexRow) => {
      return row.map((col, indexCol) => {
        return (
          <Tile
            key={`tile-${indexCol}_${indexRow}}`}
            texture={texture}
            tileSize={tileSize}
            textureSize={textureSize}
            texturePositionCol={col.positionCol}
            texturePositionRow={col.positionRow}
            positionCol={col.positionCol}
            positionRow={col.positionRow}
          />
        )
      })
    })
  },[texture, tileSize, textureSize         , tileMapData])

  return (
    <Container>
      {Tiles}
    </Container>
  )
}