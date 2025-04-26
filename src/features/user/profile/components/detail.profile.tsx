"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link dari next/link

export default function DetailProfile() {
  return (
    <div className="w-96 max-w-md">
      <div className="space-y-2 overflow-hidden rounded-lg border border-gray-200">
        {/* Username row */}
        <div className="flex items-center justify-between bg-gray-100 p-3">
          <p className="font-medium text-gray-700">Username :</p>
          <p className="text-gray-900">James Dean</p>
        </div>

        {/* Password row */}
        <div className="flex items-center justify-between bg-gray-50 p-3">
          <p className="font-medium text-gray-700">Password :</p>
          <p className="text-gray-900">Admin123</p>
        </div>

        {/* Role row */}
        <div className="flex items-center justify-between bg-gray-100 p-3">
          <p className="font-medium text-gray-700">Role :</p>
          <p className="text-gray-900">User</p>
        </div>
      </div>
    </div>
  );
}
