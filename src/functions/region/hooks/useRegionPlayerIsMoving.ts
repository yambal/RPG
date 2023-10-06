import { useAppSelector } from "../../../app/selectors/selector";

export const useRegionPlayerIsMoving = () => useAppSelector(state => {
  return !!state.region.player.moveToPosition
})