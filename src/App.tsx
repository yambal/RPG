import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

function App() {
  const blurFilter = useMemo(() => new PIXI.BlurFilter(4), []);
  
  return (
    <Stage
      width={300}
      height={300}
      options={{ backgroundColor: 0xeef1f5 }}
    >
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={150}
        y={150}
        anchor={{ x: 0.5, y: 0.5 }}
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
    </Stage>
  );
}

export default App;
