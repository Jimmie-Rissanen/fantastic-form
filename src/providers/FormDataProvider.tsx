import { FormDataType } from "../types/types";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../types";

type FormDataProviderProps = {
  children: React.ReactNode;
};

export function FormDataProvider({ children }: FormDataProviderProps) {
  const methods = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
