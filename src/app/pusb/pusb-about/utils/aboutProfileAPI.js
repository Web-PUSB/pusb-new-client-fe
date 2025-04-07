import axios, { AxiosError } from "axios";
import { BaseUrl } from "../../../../config/config"

export const GetPUSBProfile = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/profile`);
    console.log("API Response:", response.data); 
    return response.data?.data[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("API Error:", error.response); 
    } else {
      console.log("General Error:", error);
    }
  }
  return null;
};

