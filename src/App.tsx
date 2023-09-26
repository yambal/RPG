import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';
import dummy from "./images/map1.png"
import chara from "./images/numPadCharactor.png"
import { TileMap, TileMapData } from './components/tileMap/TileMap';
import { NumpadCharactor } from './components/numpadCharactor/NumpadCharactor'
import { KeyboadInput } from './functions/input/KeyboadInput';


function App() {
  // const blurFilter = useMemo(() => new PIXI.BlurFilter(4), []);
  
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

  

  return (
    <>
      
      <Stage
        width={300}
        height={300}
        options={{ backgroundColor: 0xeef1f5 }}
      >
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
        />
        <KeyboadInput />
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
      </Stage>
    </>
  );
}

export default App;
