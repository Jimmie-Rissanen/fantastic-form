import { useFormContext } from "react-hook-form";
import { getFormProgress } from "../utils/getformProgress";
import { fieldWeights, FormDataType } from "../types";

export function WeightedProgressBar() {
  const { watch } = useFormContext<FormDataType>();
  const watchedForm = watch();
  const formProgress = getFormProgress(watchedForm, fieldWeights);
  return (
    <>
      <p>Form Progress</p>
      <div style={{ backgroundColor: "#ddd", height: "20px", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#4fcf00",
            height: "100%",
            width: `${formProgress}%`,
          }}
        />
      </div>
    </>
  );
}
