import axios, { AxiosError } from "axios";
import { BaseUrl } from "./pusb/config/config";

export const GetPUSBCNC = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc`);
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

export const GetPUSBCNCById = async (id: string) => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc/${id}`);
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

export const GetPUSBCNCWorkplanByCnCId = async (cncId: string) => {
  try {
    const response = await axios.get(`${BaseUrl}/cnc/${cncId}/workplan`);
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

export const GetPUSBCNCWorkplanById = async (
  cncId: string,
  WorkplanId: string,
) => {
  try {
    const response = await axios.get(
      `${BaseUrl}/cnc/${cncId}/Workplan/${WorkplanId}`,
    );
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
