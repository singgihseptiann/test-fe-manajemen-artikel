import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRegister } from "./useRegister";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(10, {
    message: "Password must be at least 10 characters.",
  }),
  role: z.enum(["User", "Admin"]),
});

export function useRegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      role: undefined,
    },
  });

  const registerMutation = useRegister();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    registerMutation.mutate(data);
  }

  return { form, onSubmit, isSubmitting: registerMutation.isPending };
}
