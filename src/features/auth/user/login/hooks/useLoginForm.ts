import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLogin } from "./useLogin";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(10, {
    message: "Password must be at least 10 characters.",
  }),
});
export function useLoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginMutation = useLogin();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    loginMutation.mutate(data);
  }

  return { form, onSubmit, isSubmitting: loginMutation.isPending };
}
