import { useMutation } from "@tanstack/react-query";
import { login } from "../_services/login-service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => login(username, password),
    onSuccess: () => {
      console.log("✅ [LOGIN HOOK] Success, redirecting to /home");
      toast.success("Login successful");
      router.push("/home");
    },
    onError: () => {
      console.log("❌ [LOGIN HOOK] Login failed");
      toast.error("Login failed");
    },
  });
};
