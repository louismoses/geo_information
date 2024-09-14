import axios from "axios";
export const login = async (email, password) => {
  const api_url = import.meta.env.API_URL;
  try {
    const response = await axios.post(`${api_url}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
