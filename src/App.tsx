import * as PIXI from 'pixi.js';
import { Stage, Container, Text } from '@pixi/react';
import React from 'react';
import dummy from "./images/map1.png"
import chara from "./images/numPadCharactor.png"
import { TileMap, TileMapData } from './components/tileMap/TileMap';
import { NumpadCharactor } from './components/numpadCharactor/NumpadCharactor'
import { KeyboadInput } from './functions/input/KeyboadInput';
import { Pad } from './functions/input/pad/Pad';
import { InputDirection } from './app/types/InputDirection';
import { useInputDirection } from './functions/input/hooks/useDirection';
import { useAppDispatch } from './app/selectors/selector';
import { clearDirection, setDirection } from './functions/input/inputSlice';
import { CharDirection } from './app/types/CharDirection';
import { Tick } from './functions/tick/Tick';
import { useMount } from 'react-use';


function App() {
  const [charDirection, setCharDirection] = React.useState<CharDirection>('north')

  const texture = PIXI.Texture.from(dummy, {scaleMode: PIXI.SCALE_MODES.NEAREST})
  const charaTexture = PIXI.Texture.from(chara, {scaleMode: PIXI.SCALE_MODES.NEAREST})

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

  const dispatch = useAppDispatch()
  const padDownHandler = React.useCallback((inputDirection: InputDirection) => {
    dispatch(setDirection({direction: inputDirection}))
  }, [dispatch])

  const padUpHandler = React.useCallback((inputDirection: InputDirection) => {
    dispatch(clearDirection({direction: inputDirection}))
  }, [dispatch])

  const inputDirection = useInputDirection()

  React.useEffect(() => {
    if (inputDirection) {
      setCharDirection(inputDirection)
    }
  }, [inputDirection])

  return (
    <>
      <KeyboadInput />
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
        <Tick />
        <TileMap texture={texture} tileSize={64} textureSize={16} tileMapData={tileMapData}/>
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
          charDirection={charDirection}
        />
        <Container x={150} y={200}>
          <Text 
            style={
              new PIXI.TextStyle({
                fill: ['#ffffff', '#00ff99'],
                stroke: '#01d27e',
              })
            }
            text="Hello World"
            anchor={{ x: 0.5, y: 0.5 }}
          />
        </Container>
        <Pad 
          onPadDown={padDownHandler}
          onPadUp={padUpHandler}
          inputDirection={inputDirection}
        />
      </Stage>
    </>
  );
}

export default App;
