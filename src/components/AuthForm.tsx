"use client";

import { setCookie } from "cookies-next/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { FaGithub } from "react-icons/fa";
const AuthForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleGitHubLogin = async () => {
    try {
      window.location.href = `${process.env.NEXT_PUBLIC_SERVER_URL}/github/auth`;
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setCookie("session_token", token);
      router.push("/");
    }
  }, [searchParams, router]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col">
        <h2 className="text-xl font-semibold mb-4">
          Register Your self to continue
        </h2>
        <button
          onClick={handleGitHubLogin}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FaGithub />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
