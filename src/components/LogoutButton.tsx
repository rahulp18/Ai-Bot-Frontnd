"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("session_token");
    router.push("/auth");
  };
  return (
    <button
      onClick={handleLogout}
      title="Logout"
      className="text-sm border font-semibold hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center bg-white shadow  "
    >
      <CiLogout size={22} />
    </button>
  );
};

export default LogoutButton;
