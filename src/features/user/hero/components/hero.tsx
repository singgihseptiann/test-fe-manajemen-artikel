"use client";
import HeroSection from "@/assets/user/hero/hero.jpg";
import MotionFadeIn from "@/components/fadein";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center md:h-[80vh]"
      style={{ backgroundImage: `url(${HeroSection.src})` }} // pakai .src
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[#2563ebdb]/90">
        <div className="space-y-3 px-4 text-center text-white">
          <MotionFadeIn delay={1} direction="up">
            {" "}
            <h1 className="text-[16px]">Blog Genzet</h1>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
              The Journal : Design Resources, Interviews, and Industry News
            </h2>
            <p className="text-[24px]">Your daily dose of design insights!</p>
          </MotionFadeIn>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
