import React, { useState } from "react";
import ipInfo from "../api/ipinfo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.ipSearch.value;
    console.log(search);
    setSearchedIp(search);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    queryClient.clear();
    queryClient.invalidateQueries();
    navigate("/");
  };

  return (
    <div>
      <section>
        <div className="bg-sky-300">
          <form onSubmit={handleSearch}>
            <label htmlFor="ipSearch">Search: </label>
            <input type="text" id="ipSearch" />
            <button
              type="submit"
              className="border px-4 py-2 m-2 rounded bg-sky-500 text-white shadow-md hover:bg-sky-600"
            >
              Search
            </button>
          </form>
        </div>
        <button onClick={handleLogout}>logout</button>
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
