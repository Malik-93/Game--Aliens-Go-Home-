import { calculateAngle } from '../utils/formulas';

export const objects = (state, action) => {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    angle,
  };
}