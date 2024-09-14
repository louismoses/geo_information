import { create } from "zustand";

const useIpInfoStore = create((set) => ({
  ipData: "",
  storeIpInfo: (ipInfo) => {
    set({ ipData: { ...ipInfo } });
    localStorage.setItem("ipData", JSON.stringify(ipInfo));
  },
  clearIpInfo: () => {
    set({ ipData: "" });
    localStorage.removeItem("ipData");
  },
}));

export default useIpInfoStore;
