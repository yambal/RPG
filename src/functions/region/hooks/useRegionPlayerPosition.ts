import { useAppSelector } from "../../../app/selectors/selector";

export const useRegionPlayerPosition = () => useAppSelector(state => state.region.player.position)