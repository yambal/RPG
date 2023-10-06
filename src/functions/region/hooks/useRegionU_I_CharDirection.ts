import { useAppSelector } from "../../../app/selectors/selector";

export const useRegionU_I_CharDirection = () => useAppSelector(state => state.region.player.uiCharDirection)