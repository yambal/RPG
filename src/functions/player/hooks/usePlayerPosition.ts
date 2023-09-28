import { useAppSelector } from "../../../app/selectors/selector";

export const usePlayerPosition = () => useAppSelector(state => state.player.position)