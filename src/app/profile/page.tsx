import { ProtectedRoute } from "@/features/protected-route/protected.route";
import ProfileSection from "@/features/user/profile/profile.section";
import React from "react";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      {" "}
      <div className="flex h-screen items-center justify-center">
        <ProfileSection />
      </div>
    </ProtectedRoute>
  );
}
