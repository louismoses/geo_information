import React from "react";
import { useState } from "react";
import login from "../api/login";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const response = await login(input.email, input.password);
      if (!response || !response.data || !response.data.token) {
        throw new Error("Invalid login response");
      }
      Cookies.set("token", response.data.token, { expires: 1 });
    },
    onSuccess: () => {
      navigate("/home");
    },
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="grid grid-flow-col h-screen">
      <div className="bg-sky-500"></div>
      <div className="grid items-center place-content-center">
        <div className="flex flex-col md:min-w-[400px] p-4">
          <h2
            className="text-3xl font-bold p-2
           text-center pb-4"
          >
            Sign in
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="test@example.com"
                className="p-2 rounded border"
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="p-2 rounded border"
                onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              className="bg-sky-500 text-white font-semibold px-4 py-3 rounded w-full mt-4"
            >
              Login
            </button>
          </form>
          <p className=" text-center py-4 italic text-neutral-300">
            email: test@example.com <br /> password: password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
