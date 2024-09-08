import { useFormContext } from "react-hook-form";

export function FavoriteFoodsForm() {
  const { register } = useFormContext();
  return (
    <input
      {...register("favoriteFoods.favoriteFood")}
      placeholder="Favorite Food"
    />
  );
}
