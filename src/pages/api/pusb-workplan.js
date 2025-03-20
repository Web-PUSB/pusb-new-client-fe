import axios from "axios";
import { BaseUrl } from "./pusb/config/config";

export const GetPUSBWorkplan = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/workplan_category`);
    return response.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
    throw error;
  }
};

export const GetPUSBWorkplanById = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}/workplan_category/${id}`);
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
