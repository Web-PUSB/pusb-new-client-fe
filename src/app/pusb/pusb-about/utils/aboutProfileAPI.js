import axios from "axios";

export const GetPUSBProfile = async () => {
  try {
    const response = await axios.get('/api/pusb-profile');
    return response.data?.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
};
