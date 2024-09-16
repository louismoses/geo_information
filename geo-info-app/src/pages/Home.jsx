import React from "react";
import ipInfo from "../api/ipinfo";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ipInfo"],
    queryFn: async () => {
      const data = await ipInfo();
      console.log(data);
      return data;
    },
    onSuccess: () => {
      console.log(data);
    },
    error: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <h1>Home</h1>
      <p>{data.ip}</p>
    </div>
  );
};

export default Home;
