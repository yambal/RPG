import { useAppSelector } from "../../../app/selectors/selector";

export const useInputDirection = () => useAppSelector(state => state.input.direction)