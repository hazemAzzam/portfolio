import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const requireAuth = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;
  console.log("authToken", authToken);
  if (!authToken) {
    redirect("/login");
  }
  return authToken;
};
