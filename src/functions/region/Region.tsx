import { Container } from "@pixi/react"
import { Player } from "../player/Player"
import React from "react"
import { N_E_W_S_Direction } from "../../app/types/N_E_W_S_Direction"
import { RegionPosition } from "../../app/types/RegionPosition"

export type RegionProps = {
  regionPlayerPosition: RegionPosition
  regionU_ICharDirection: N_E_W_S_Direction
}

export const Region = ({
  regionPlayerPosition,
  regionU_ICharDirection
}: RegionProps) => {

  return (
    <Container>
      <Player
        x={regionPlayerPosition.x * 64}
        y={regionPlayerPosition.y * 64}
        uiCharDirection={regionU_ICharDirection}
      />
    </Container>
  )

}