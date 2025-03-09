import axios, { AxiosError } from "axios";
import { BaseUrl } from "..pusb/config/config";

export const GetPUSBProfile = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/profile`);
    return response.data?.data[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};
