import React, { useState } from "react";
import ipInfo from "../api/ipinfo";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [searchedIp, setSearchedIp] = useState("");
  const [searchIp, setSearchIp] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["ipInfo", searchedIp],
    queryFn: async () => {
      const data = await ipInfo(searchedIp);
      window.localStorage.setItem(`ip#${data.ip}`, JSON.stringify(data));
      return data;
    },
  });

  console.log(data);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.ipSearch.value;
    console.log(search);
    setSearchedIp(search);
  };

  return (
    <div>
      <section>
        <div>
          <form onSubmit={handleSearch}>
            <label htmlFor="ipSearch">Search: </label>
            <input type="text" id="ipSearch" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
      <div className="border">
        {data && typeof data === "object" ? (
          Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
