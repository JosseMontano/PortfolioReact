import { http, axios } from "./http";
import { FormGmail } from '../interface/formGmail'
export const gmailRequest = async (data: FormGmail) =>
  await axios.post(`${http}josemariazambranamontano123@gmail.com`, data, {
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
  });
