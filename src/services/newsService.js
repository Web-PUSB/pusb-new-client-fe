import axios from "axios";

const BaseUrl = process.env.REACT_APP_API_BASE_URL;

export const GetPUSBNews = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/news`);
    return response.data?.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response);
    } else {
      console.error("Unexpected Error:", error);
    }
  }
  return null;
};
