import React, { useEffect } from "react";
import ipInfo from "../api/ipinfo";
import useIpInfoStore from "../store/useIpInfoStore";

const Home = () => {
  const { storeIpInfo } = useIpInfoStore();

  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        const res = await ipInfo();
        console.log(res);
        storeIpInfo(res.data);
      } catch (error) {
        console.error("Error fetching IP info:", error);
      }
    };

    fetchIpInfo();
  }, [storeIpInfo]);
  return <div>Home</div>;
};

export default Home;
