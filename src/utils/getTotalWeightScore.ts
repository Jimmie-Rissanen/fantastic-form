import { FieldWeights } from "../types";

export function getRotalWeightScore(fieldWeights: FieldWeights): number {
  return Object.values(fieldWeights).reduce((total, sectionWeights) => {
    return (
      total +
      Object.values(sectionWeights).reduce(
        (sectionTotal, weight) => sectionTotal + weight,
        0,
      )
    );
  }, 0);
}
