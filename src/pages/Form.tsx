import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormDataType } from "../types";
import { useState } from "react";
import { Tab } from "../components/Tab";
import { TabPanel } from "../components/TabPanel";
import { PersonalInfoForm } from "../components/PersonalInfoForm";
import { FavoriteFoodsForm } from "../components/FavoriteFoodsForm";
import { WeightedProgressBar } from "../components/WeightedProgressBar";

export function Form() {
  const { handleSubmit } = useFormContext<FormDataType>();
  const [activeTab, setActiveTab] = useState(0);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <nav>
        <Tab activeTab={activeTab} index={0} onClick={setActiveTab}>
          Personal Info
        </Tab>
        <Tab activeTab={activeTab} index={1} onClick={setActiveTab}>
          Favorite Foods
        </Tab>
      </nav>
      <TabPanel activeTab={activeTab} index={0}>
        <PersonalInfoForm />
      </TabPanel>

      <TabPanel activeTab={activeTab} index={1}>
        <FavoriteFoodsForm />
      </TabPanel>

      <button type="submit">Submit</button>
      <WeightedProgressBar />
    </form>
  );
}
