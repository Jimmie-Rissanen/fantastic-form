import { PersonalInfoType, FavoriteFoodsType } from "./types";

type WeightedFields<T> = {
  [K in keyof T]: number;
};

export type FieldWeights = {
  personalInfo: WeightedFields<PersonalInfoType>;
  favoriteFoods: WeightedFields<FavoriteFoodsType>;
};

export const fieldWeights: FieldWeights = {
  personalInfo: {
    name: 30,
    email: 30,
  },
  favoriteFoods: {
    favoriteFood: 40,
  },
};
