import { Container } from "@pixi/react"
import { ButtonDirection, PadButton } from "./PadButton"
import pad1 from "./pad1.png"
import * as PIXI from 'pixi.js'
import React from "react";

export const Pad = () => {
  const [direction, setDirection] = React.useState<ButtonDirection | null>(null)

  const texture = PIXI.Texture.from(pad1, {scaleMode: PIXI.SCALE_MODES.NEAREST})

  const handleMouseDown = React.useCallback((direction: ButtonDirection) => {
    setDirection(direction)
  }, [])

  const handleMouseUp = React.useCallback((direction: ButtonDirection) => {
    setDirection(null)
  }, [])

  return (
    <Container
      width={440}
      height={440}
      scale={{
        x: 0.25,
        y: 0.25
      }}
    >
      <PadButton active={direction === "north"} texture={texture} direction="north" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={direction === "south"} texture={texture} direction="south" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={direction === "east"} texture={texture} direction="east" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={direction === "west"} texture={texture} direction="west" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
    </Container>
  )
}