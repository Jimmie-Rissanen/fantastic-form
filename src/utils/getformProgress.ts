import { FieldWeights, FormDataType } from "../types";
import { getCurrentWeightScore } from "./getCurrentWeightScore";
import { getRotalWeightScore } from "./getTotalWeightScore";

export function getFormProgress(
  formData: FormDataType | undefined | null,
  fieldWeights: FieldWeights,
): number {
  if (!formData) {
    return 0;
  }

  const total = getRotalWeightScore(fieldWeights);
  const current = getCurrentWeightScore(formData, fieldWeights);
  console.log(current);

  return (current / total) * 100;
}
