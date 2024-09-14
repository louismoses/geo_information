import React from "react";
import { useState } from "react";
import { login } from "../api/login";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
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
    console.log(input);
  };
  return (
    <div className="grid grid-flow-col h-screen">
      <div className="bg-red-300">img</div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
