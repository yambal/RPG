import { Container } from "@pixi/react"
import { PadButton } from "./PadButton"
import pad1 from "./pad1.png"
import * as PIXI from 'pixi.js'
import React from "react";
import { InputDirection } from "../../../app/types/InputDirection";

export type PadProps = {
  inputDirection : InputDirection,
  onPadDown: (direction: InputDirection) => void,
  onPadUp: (direction: InputDirection) => void
} 

export const Pad = ({
  inputDirection = null,
  onPadDown,
  onPadUp
}: PadProps) => {
  const texture = PIXI.Texture.from(pad1, {scaleMode: PIXI.SCALE_MODES.NEAREST})

  const handleMouseDown = React.useCallback((inputDirection: InputDirection) => {
    onPadDown(inputDirection)
  }, [onPadDown])

  const handleMouseUp = React.useCallback((inputDirection: InputDirection) => {
    onPadUp(inputDirection)
  }, [onPadUp])

  return (
    <Container
      width={440}
      height={440}
      scale={{
        x: 0.25,
        y: 0.25
      }}
    >
      <PadButton active={inputDirection === "north"} texture={texture} direction="north" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={inputDirection === "south"} texture={texture} direction="south" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={inputDirection === "east"} texture={texture} direction="east" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={inputDirection === "west"} texture={texture} direction="west" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
    </Container>
  )
}