import { useApp, useTick } from "@pixi/react"
import { Ticker } from "pixi.js";

export const Tick = () => {
  /*
  const myTicker = new Ticker();
  myTicker.maxFPS = 1;

  const app = useApp()
  app.ticker = myTicker
  */

  const app = useApp()

  useTick((delta) => {
    /*
    60fps = delta 1
    30fps = delta 2
    */

    console.log('fps', app.ticker.FPS, delta)
  })
  return (<></>)
}