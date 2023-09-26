import { TilingSprite } from "@pixi/react"
import * as PIXI from 'pixi.js';
import React from "react";

export type PadButtonProps = {
  texture: PIXI.Texture<PIXI.Resource>,
  direction: ButtonDirection
  x?: number
  y?: number
  active?: boolean
  onMouseDown: (direction: ButtonDirection) => void
  onMouseUp: (direction: ButtonDirection) => void
}

export type ButtonDirection = 'east' | 'west' | 'south' | 'north'

export const PadButton = ({
  texture,
  direction,
  x = 220,
  y = 220,
  active = false,
  onMouseDown,
  onMouseUp
}:PadButtonProps ) => {
  const rotarion = React.useMemo(() => {
    switch(direction) {
      case 'east':
        return 90 * (Math.PI / 180)
      case 'west':
        return 270 * (Math.PI / 180)
      case 'south':
        return 180 * (Math.PI / 180)
      default:
        return 0
    }
  }, [direction])

  const tilePosition = React.useMemo(() => {
    return active ? {x: -160, y: 0} : {x: 0, y: 0}
  }, [active])

  return (
    <TilingSprite
      texture={texture}
      width={160}
      height={160}
      tilePosition={tilePosition}
      rotation={rotarion}
      anchor={{
        x: 0.5,
        y: 1.4
      }}
      x={x}
      y={y}
      onmousedown={() => onMouseDown(direction)}
      onmouseup={() => onMouseUp(direction)}
      onmouseleave={() => {onMouseUp(direction)}}
      interactive={true}
    />
  )
}