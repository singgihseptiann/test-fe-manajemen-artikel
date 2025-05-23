"use client";

import React from "react";
import AvatarProfile from "./components/avatar.profile";
import DetailProfile from "./components/detail.profile";
import HomeButton from "@/components/home.button";
import MotionFadeIn from "@/components/fadein";
import ProfileSkeleton from "./components/profile.skeleton";
import { useUserProfile } from "./hooks/useUserProfile";

export default function ProfileSection() {
  const { username, role, avatarName, isLoading } = useUserProfile();

  if (isLoading) return <ProfileSkeleton />;

  return (
    <div className="space-y-4">
      <MotionFadeIn delay={0.2}>
        <h1 className="text-center">User Profile</h1>
      </MotionFadeIn>

      <MotionFadeIn delay={0.4}>
        <AvatarProfile name={avatarName} />
      </MotionFadeIn>

      <MotionFadeIn delay={0.6}>
        <MotionFadeIn delay={0.6}>
          <DetailProfile
            data={[
              { label: "Username", value: username || "-" },
              { label: "Password", value: "*******" },
              { label: "Role", value: role || "-" },
            ]}
          />
        </MotionFadeIn>
      </MotionFadeIn>

      <MotionFadeIn delay={0.8}>
        <HomeButton />
      </MotionFadeIn>
    </div>
  );
}
