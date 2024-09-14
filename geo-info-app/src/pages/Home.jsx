import React, { useEffect } from "react";
import ipInfo from "../api/ipinfo";

const Home = () => {
  useEffect(() => {
    ipInfo();
  }, []);
  return <div>Home</div>;
};

export default Home;
