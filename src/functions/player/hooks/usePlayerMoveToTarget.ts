import { useAppSelector } from "../../../app/selectors/selector";

export const usePlayerMoveToTarget = () => useAppSelector(state => state.player.playerMoveToTarget)