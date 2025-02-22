"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const EditMode = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  // Determine if editMode is active
  const isEditMode = useMemo(() => {
    return params.get("editMode") === "true";
  }, [params]);

  const handleClick = () => {
    const newParams = new URLSearchParams(params.toString());

    if (isEditMode) {
      // Remove editMode query parameter if it's currently enabled
      newParams.delete("editMode");
    } else {
      // Add or update the editMode query param to "true"
      newParams.set("editMode", "true");
    }

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      title={isEditMode ? "Disable Edit Mode" : "Enable Edit Mode"}
      className="text-sm border font-semibold hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center bg-white shadow"
    >
      {isEditMode ? (
        <AiOutlineClose color="#FF0000" size={22} /> // Check icon for enabled state
      ) : (
        <BiEdit color="#808080" size={22} /> // Edit icon for disabled state
      )}
    </button>
  );
};

export default EditMode;
