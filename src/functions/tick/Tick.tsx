import { useApp, useTick } from "@pixi/react"

export type TickProps = {
  onTick: () => void
}
export const Tick = ({
  onTick
}: TickProps) => {
  /*
  const myTicker = new Ticker();
  myTicker.maxFPS = 1;

  const app = useApp()
  app.ticker = myTicker
  */

  const app = useApp()

  // const dispatch = useAppDispatch()
  useTick((delta) => {
    onTick()
  })
  return (<></>)
}