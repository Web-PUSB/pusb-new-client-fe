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
