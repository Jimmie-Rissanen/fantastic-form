import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z.string().nonempty({ message: "Please write your name" }),
  email: z.string().email().nonempty({ message: "Please enter a valid email" }),
});

export const favoriteFoodsSchema = z.object({
  favoriteFood: z.string(),
});

export const formSchema = z.object({
  personalInfo: personalInfoSchema,
  favoriteFoods: favoriteFoodsSchema,
});
