import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const requireAuth = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;
  if (!authToken) {
    redirect("/login");
  }
  return authToken;
};

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
  redirect("/login");
};
