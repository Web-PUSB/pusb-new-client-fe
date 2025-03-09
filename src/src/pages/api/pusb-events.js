import axios, { AxiosError } from "axios";
import { BaseUrl } from "./pusb/config/config";

export const GetPUSBEvent = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/event_timeline`);
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

export const GetPUSBEventById = async (id: string) => {
  try {
    const response = await axios.get(`${BaseUrl}/event_timeline/${id}`);
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

export const GetPUSBEventTimeline = async (eventId: string) => {
  try {
    const response = await axios.get(
      `${BaseUrl}/event_timeline/${eventId}/detail`,
    );
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

export const GetPUSBEventTimelineById = async (
  eventId: string,
  timelineId: string,
) => {
  try {
    const response = await axios.get(
      `${BaseUrl}/event_timeline/${eventId}/detail/${timelineId}`,
    );
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
