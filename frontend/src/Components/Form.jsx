import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      console.log("POST ->", api.defaults.baseURL, route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("request error:", error);
      const msg =
        error?.response?.data?.detail ??
        error?.response?.data ??
        error?.message ??
        "Unknown error";
      alert(typeof msg === "string" ? msg : JSON.stringify(msg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="form-container  border-gray-400 rounded border p-5 flex items-center flex-col h-1/2 w-1/5 justify-evenly">
        <h1 className="text-3xl  font-medium ">{name}</h1>
        <div className="flex flex-col">

        <input
          type="text"
          className="form-input p-2 mb-2 border border-black rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          />
        <input
          type="password"
          className="form-input p-2 mt-2 border border-black rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
        </div>
        <button className="form-button bg-blue-600 rounded pt-2 pr-6 pb-2 pl-6 text-white" type="submit">
          {name}
        </button>
      </form>
    </div>
  );
}

export default Form
