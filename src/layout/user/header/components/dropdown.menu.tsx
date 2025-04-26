"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link"; // Import Link dari Next.js

export function UserDropdown() {
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
  };

  const firstLetter = user.name.charAt(0).toUpperCase();

  const handleLogout = () => {
    console.log("Logout clicked");
    // logic logout di sini, misal clear cookie/token, redirect, dll
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer outline-none hover:bg-transparent focus:bg-transparent"
      >
        <button className="hover:bg-muted flex items-center gap-2 rounded-md px-3 py-1 transition">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 font-semibold text-blue-900">
            {firstLetter}
          </div>
          <span className="hidden font-medium text-blue-900 underline md:block">
            {user.name}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuGroup>
          {/* Tambahkan link ke halaman profile */}
          <Link href="/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* Log out dengan AlertDialog */}
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
