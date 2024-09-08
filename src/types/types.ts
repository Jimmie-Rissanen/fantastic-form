import { z } from "zod";
import { formSchema } from "./schemas";

export type FormDataType = z.infer<typeof formSchema>;
export type PersonalInfoType = FormDataType["personalInfo"];
export type FavoriteFoodsType = FormDataType["favoriteFoods"];
