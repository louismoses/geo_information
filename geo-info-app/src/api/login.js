import axios from "axios";
export const login = async (email, password) => {
  const api_url = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.post(`${api_url}/api/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
