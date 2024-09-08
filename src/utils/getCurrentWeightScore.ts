import { FieldWeights, FormDataType } from "../types";

export function getCurrentWeightScore(
  formData: FormDataType,
  fieldWeights: FieldWeights,
): number {
  return Object.keys(formData).reduce((total, section) => {
    const sectionData = formData[section as keyof FormDataType];
    const sectionWeights = fieldWeights[section as keyof FieldWeights];
    return (
      total +
      Object.keys(sectionData).reduce((sectionTotal, field) => {
        const fieldValue = sectionData[field as keyof typeof sectionData];
        const fieldWeight =
          sectionWeights[field as keyof typeof sectionWeights];
        // Only add the weight if the field is filled
        return fieldValue ? sectionTotal + fieldWeight : sectionTotal;
      }, 0)
    );
  }, 0);
}
