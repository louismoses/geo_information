import { create } from "zustand";
import Cookies from "js-cookie";

const useUserStore = create((set) => ({
  token: "",
  user: "",
  storeUser: (token, user) => {
    set({ token: token, user: user });
    Cookies.set("token", token, { expires: 1 });
    localStorage.setItem("user", JSON.stringify(user));
  },
  clearUser: () => {
    set({ token: "", user: "" });
    Cookies.remove("token");
    localStorage.removeItem("user");
  },
}));

export default useUserStore;
