import axios, { AxiosError } from "axios";
import { BaseUrl } from "./pusb/config/config";

export const GetPUSBNews = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/news`);
    return response.data?.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};

export const GetPUSBNewsBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${BaseUrl}/news/${slug}`);
    return response.data?.data[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else {
      console.log(error);
    }
    throw error;
  }
};
