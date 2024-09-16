import axios from "axios";
const ipInfo = async (ip) => {
  const ipInfoToken = import.meta.env.VITE_IP_INFO_TOKEN;
  try {
    const endPoint = ip
      ? `https://ipinfo.io/${ip}?token=${ipInfoToken}`
      : `https://ipinfo.io/json?token=${ipInfoToken}`;
    const { data } = await axios.get(endPoint);

    return data;
  } catch (error) {
    return error.response;
  }
};

export default ipInfo;
