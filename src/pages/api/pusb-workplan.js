import axios, { AxiosError } from "axios";
import { BaseUrl } from "..pusb/config/config";

export const GetPUSBWorkplan = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/workplan_category`);
    return response.data?.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else {
      console.log(error);
    }
    throw error;
  }
};

export const GetPUSBWorkplanById = async (id: string) => {
  try {
    const response = await axios.get(`${BaseUrl}/workplan_category/${id}`);
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
