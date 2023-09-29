import { useAppSelector } from "../../../app/selectors/selector";

export const usePlayerDirection = () => useAppSelector(state => state.player.charDirection)