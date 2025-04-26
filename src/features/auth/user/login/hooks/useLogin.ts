import userLogin from "@/service/auth";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      userLogin.post("login", data),

    onSuccess: (response) => {
      console.log("Login success:", response);
    },

    onError: (error) => {
      console.error("Login error:", error);
    },
  });
}
