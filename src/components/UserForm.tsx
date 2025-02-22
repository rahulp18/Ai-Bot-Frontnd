"use client";

import { saveUserToken } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await saveUserToken(apiKey);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg w-full rounded-md  justify-center bg-white shadow px-4 py-5 border border-slate-100 "
    >
      <h1 className="mb-5 text-lg font-normal font-sans">
        Provide Your <span className="font-semibold">Open AI API</span> key to
        continue
      </h1>
      <div className=" flex flex-col  w-full gap-y-2">
        <label className="text-sm font-medium font-sans" htmlFor="key">
          Api Key
        </label>
        <input
          id="key"
          placeholder="Enter your key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="border  px-4 py-2 rounded-md w-full"
        />
        <p className="text-sm font-normal text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          aperiam quod odio?
        </p>
      </div>
      <button
        disabled={loading || !apiKey}
        className=" mt-6 w-full bg-blue-600 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-5 py-2 rounded-md"
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default UserForm;
