"use server";

import api from "@/config";

export const saveUserToken = async (token: string) => {
  try {
    const res = await api.patch("/github/auth/update-api-key", {
      openAiApiKey: token,
    });
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
