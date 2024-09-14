import axios from "axios";
const ipInfo = async () => {
  const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
  try {
    const response = await axios.get(
      `https://ipinfo.io/json?token=${ipInfoToken}`
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export default ipInfo;
