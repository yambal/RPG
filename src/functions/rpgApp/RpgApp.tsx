import * as PIXI from 'pixi.js';
import { Stage } from '@pixi/react';
import React from 'react';
import dummy from "../../images/map1.png"
import { TileMap, TileMapData } from '../../components/tileMap/TileMap'
import { Pad } from '../../functions/input/pad/Pad';
import { InputDirection } from '../../app/types/InputDirection';
import { useInputDirection } from '../../functions/input/hooks/useDirection';
import { useAppDispatch } from '../../app/selectors/selector';
import { clearInputDirection, setInputDirection } from '../../functions/input/inputSlice';
import { Tick } from '../../functions/tick/Tick';
import { onRegionTick } from '../region/regionSlice';
import { Region } from '../region/Region';
import { useRegionPlayerPosition } from '../region/hooks/useRegionPlayerPosition'
import { useRegionU_I_CharDirection } from '../region/hooks/useRegionU_I_CharDirection';

export const RpgApp = () => {
  const texture = PIXI.Texture.from(dummy, {scaleMode: PIXI.SCALE_MODES.NEAREST})

  const dispatch = useAppDispatch()

  const padDownHandler = React.useCallback((newInputDirection: InputDirection) => {
    dispatch(setInputDirection({inputDirection: newInputDirection}))
  }, [dispatch])

  const padUpHandler = React.useCallback((inputDirection: InputDirection) => {
    dispatch(clearInputDirection({inputDirection: inputDirection}))
  }, [dispatch])

  const inputDirection = useInputDirection()

  const onTickHandler = React.useCallback(() => {
    dispatch(onRegionTick({inputDirection}))
    }, [dispatch, inputDirection]
  )

  const regionPlayerPosition = useRegionPlayerPosition()
  const regionU_I_CharDirection = useRegionU_I_CharDirection()

  const tileMapData: TileMapData = [
    [
      { 
        texturePositionCol: 0,
        texturePositionRow: 0,
        positionCol: 0,
        positionRow: 0
      },
      { 
        texturePositionCol: 1,
        texturePositionRow: 0,
        positionCol: 1,
        positionRow: 0
      },
      { 
        texturePositionCol: 0,
        texturePositionRow: 1,
        positionCol: 0,
        positionRow: 1
      },
    ]
  ]

  return (
    <Stage
      width={300}
      height={300}
      options={{ backgroundColor: 0xeef1f5 }}
      onMount={(app) => {
        const myTicker = new PIXI.Ticker();
        myTicker.minFPS = 30
        myTicker.maxFPS = 30
        myTicker.start()

        app.ticker = myTicker
      }}
      raf={false}
    >
      <Tick onTick={onTickHandler}/>

      <TileMap
        texture={texture}
        tileSize={64}
        textureSize={16}
        tileMapData={tileMapData}
      />
      <Region
        regionPlayerPosition={regionPlayerPosition}
        regionU_ICharDirection={regionU_I_CharDirection}
      />
      <Pad 
        onPadDown={padDownHandler}
        onPadUp={padUpHandler}
        uiInputDirection={inputDirection}
      />
    </Stage>
  )
}