"use client";

import React from "react";
import AvatarProfile from "./components/avatar.profile";
import DetailProfile from "./components/detail.profile";
import HomeButton from "@/components/home.button";
import MotionFadeIn from "@/components/fadein";


export default function ProfileSection() {
  return (
    <div className="space-y-3">
      <MotionFadeIn delay={0.2}>
        <h1 className="text-center">User Profile</h1>
      </MotionFadeIn>

      <MotionFadeIn delay={0.4}>
        <AvatarProfile name="Alex Johnson" />
      </MotionFadeIn>

      <MotionFadeIn delay={0.6}>
        <DetailProfile />
      </MotionFadeIn>

      <MotionFadeIn delay={0.8}>
        <HomeButton />
      </MotionFadeIn>
    </div>
  );
}
