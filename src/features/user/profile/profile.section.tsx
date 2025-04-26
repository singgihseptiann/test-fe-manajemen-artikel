"use client";

import React from "react";
import AvatarProfile from "./components/avatar.profile";
import DetailProfile from "./components/detail.profile";
import HomeButton from "@/components/home.button";
import MotionFadeIn from "@/components/fadein";
import { useUserProfile } from "./hooks/useProfile";
import ProfileSkeleton from "./components/profile.skeleton";

export default function ProfileSection() {
  const { data, isLoading, isError } = useUserProfile();
  const avatarName = data?.username || "John Doe";

  if (isLoading) return <ProfileSkeleton />;

  if (isError) return <p className="text-center">Failed to fetch profile</p>;
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
              { label: "Username", value: data?.username || "-" },
              { label: "Password", value: "*******" },
              { label: "Role", value: data?.role || "-" },
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
