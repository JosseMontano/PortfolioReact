import { http, axios } from "./http";

export const gmailRequest = async (data:[]) =>
  await axios.post(`${http}josemariazambranamontano123@gmail.com`, data, {
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
  });
