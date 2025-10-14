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
    onSuccess: (res) => {
      toast.success("Login successful");
      console.log("login successful", res);
      router.push("/home");
    },
    onError: () => {
      toast.error("Login failed");
    },
  });
};
