"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Home() {
  const [username, setUsername] = useState("Saegewerk");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== "correct_password") {
      setShowModal(true);
    }
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
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
                  className={`mt-1 p-2 w-full border rounded pr-10`}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            <div className="mt-2">
              <button
                type="submit"
                className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Einloggen
              </button>
            </div>
            <div className="mt-2 text-center">
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => setShowForgotPasswordModal(true)}
              >
                Passwort vergessen?
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg mx-auto">
            <h2 className="text-2xl mb-4 text-red-600">Fehler</h2>
            <p className="mb-4">Falsches Passwort</p>
            <button
              onClick={closeModal}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
            >
              Schließen
            </button>
            <span
              className="absolute top-0 right-0 p-4 cursor-pointer text-red-600 text-3xl"
              onClick={closeModal}
            >
              &times;
            </span>
          </div>
        </div>
      )}
      {/* {showForgotPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg mx-auto">
            <h2 className="text-2xl mb-4">Passwort vergessen</h2>
            <p className="mb-4">
              Bitte kontaktieren Sie den Support, um Ihr Passwort zurückzusetzen.
            </p>
            <button
              onClick={closeForgotPasswordModal}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
            >
              Schließen
            </button>
            <span
              className="absolute top-0 right-0 p-4 cursor-pointer text-blue-500 text-3xl"
              onClick={closeForgotPasswordModal}
            >
              &times;
            </span>
          </div>
        </div>
      )} */}
    </main>
  );
}
