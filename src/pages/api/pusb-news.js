import axios from "axios";
import { BaseUrl } from "../../config/config";

export const GetPUSBNews = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/news`);
    return response.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};

export const GetPUSBNewsBySlug = async (slug) => {
  try {
    const response = await axios.get(`${BaseUrl}/news/${slug}`);
    return response.data?.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
    throw error;
  }
};
