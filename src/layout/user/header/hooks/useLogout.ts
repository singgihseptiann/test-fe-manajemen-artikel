// src/hooks/useLogout.ts
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogout() {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    console.log("User logged out");
    // Implement your logout logic here
    localStorage.removeItem("user_token");
    setOpenDialog(false); // Close the dialog after logout
    router.push("/");
  };

  return {
    openDialog,
    setOpenDialog,
    handleLogout,
  };
}
