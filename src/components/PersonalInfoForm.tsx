import { useFormContext } from "react-hook-form";
export function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input {...register("personalInfo.name")} placeholder="Name" />
      {errors.personalInfo?.name && <p>{errors.personalInfo.name.message}</p>}
      <input {...register("personalInfo.email")} placeholder="Email" />
      {errors.personalInfo?.email && <p>{errors.personalInfo.email.message}</p>}
    </>
  );
}
