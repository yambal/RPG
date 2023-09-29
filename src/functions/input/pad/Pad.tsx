import { Container } from "@pixi/react"
import { PadButton } from "./PadButton"
import pad1 from "./pad1.png"
import * as PIXI from 'pixi.js'
import React from "react";
import { InputDirection } from "../../../app/types/InputDirection";
import { useKeyPressEvent } from "react-use";

export type PadProps = {
  /**
   * 現在の押下状態としてUIに表示される方向
   */
  uiInputDirection : InputDirection,

  /**
   * 十字キー、あるいは同等のキーが押下されたときのハンドラ
   * @param direction 方向を示す
   * @returns 
   */
  onPadDown: (direction: InputDirection) => void,

  /**
   * 十字キー、あるいは同等のキーが押下が解除されたときのハンドラ
   * @param direction 方向を示す
   * @returns 
   */
  onPadUp: (direction: InputDirection) => void
} 

export const Pad = ({
  uiInputDirection = null,
  onPadDown,
  onPadUp
}: PadProps) => {
  const texture = PIXI.Texture.from(pad1, {scaleMode: PIXI.SCALE_MODES.NEAREST})

  useKeyPressEvent('w', () => {
    onPadDown('north')
  }, () => {
    onPadUp('north')
  })

  useKeyPressEvent('a', () => {
    onPadDown('west')
  }, () => {
    onPadUp('west')
  })

  useKeyPressEvent('d', () => {
    onPadDown('east')
  }, () => {
    onPadUp('east')
  })

  useKeyPressEvent('s', () => {
    onPadDown('south')
  }, () => {
    onPadUp('south')
  })

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
      <PadButton active={uiInputDirection === "north"} texture={texture} direction="north" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={uiInputDirection === "south"} texture={texture} direction="south" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={uiInputDirection === "east"} texture={texture} direction="east" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
      <PadButton active={uiInputDirection === "west"} texture={texture} direction="west" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}/>
    </Container>
  )
}