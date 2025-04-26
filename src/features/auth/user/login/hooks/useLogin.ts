import { useRouter } from "next/navigation"; // <- import router
import { useMutation } from "@tanstack/react-query";
import userAuth from "@/service/auth";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      userAuth.post("login", data),

    onSuccess: (response) => {
      localStorage.setItem("user_token", response.token);

      router.push("/home");
    },

    onError: (error) => {
      console.error("Login error:", error);
    },
  });
}
