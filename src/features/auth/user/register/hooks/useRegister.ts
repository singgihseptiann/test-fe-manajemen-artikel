import userAuth from "@/service/auth";
import { useMutation } from "@tanstack/react-query";

export function useRegister() {
  return useMutation({
    mutationFn: (data: { username: string; password: string; role: string }) =>
      userAuth.post("register", data),

    onSuccess: (response) => {
      localStorage.setItem("user_role", response.role);
    },

    onError: (error) => {
      console.error("Login error:", error);
    },
  });
}
