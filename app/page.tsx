"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Home() {
  const [username, setUsername] = useState("saegewerk");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== "correct_password") { // There's no correct password, so it will always be wrong
      setError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) {
      setError(false);
    }
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/background-image.jpg")' }}
    >
      <div className="w-full max-w-md">

        <div className="bg-white p-8 rounded-lg shadow-md">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={500} 
          height={500} 
          layout="responsive" 
          className="w-full"
        />
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col mt-2 ">
              <span className="text-gray-500">Benutzername</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border rounded"
              />
            </label>
            <label className="flex flex-col mt-2">
              <span className="text-gray-500">Passwort</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className={`mt-1 p-2 w-full border rounded pr-10 ${error ? "error" : ""}`}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            {error && <p className="text-red-500 text-[16px] mt-2">Falsches Passwort. Bitte versuchen Sie es erneut.</p>}
            <div className=" mt-5">
              <button
                type="submit"
                className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Einloggen
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
