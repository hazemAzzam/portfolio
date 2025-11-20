"use server";

import { MessageType } from "@/types";

export async function createMessage(data: FormData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/messages/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      }
    );

    console.log("Response status:", response);
  } catch (error) {
    console.error("Error creating message:", error);
  }
}
