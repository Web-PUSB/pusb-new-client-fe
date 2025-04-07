import axios from "axios";
import { BaseUrl } from "../../config/config";

export const GetPUSBCNC = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc`);
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

export const GetPUSBCNCById = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc/${id}`);
    const data = response.data?.data;
    console.log("Fetched CNC raw data:", data);
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
      return data[0];
    } else {
      throw new Error("Invalid or empty CNC data");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error; 
  }
};

export const GetPUSBCNCWorkplanByCnCId = async (cncId) => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc/${cncId}/workplan`);
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

export const GetPUSBCNCWorkplanById = async (cncId, workplanId) => {
  try {
    const response = await axios.get(
      `${BaseUrl}/cnc/${cncId}/workplan/${workplanId}`
    );
    return response.data?.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};
