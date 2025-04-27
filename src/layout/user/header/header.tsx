"use client";

import { UserDropdown } from "@/layout/user/header/components/dropdown.menu";
import Link from "next/link";
import useScroll from "./hooks/useScroll";
import LogoWhite from "@/assets/user/logo/logo1.png";
import LogoBlue from "@/assets/user/logo/logo2.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isScrolled } = useScroll();
  const pathname = usePathname();

  const isDetailPage = pathname.includes("/articles/");

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full p-4 text-white transition-all duration-300 ease-in-out ${
        isDetailPage || isScrolled
          ? "border-b bg-white"
          : "border-0 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold">
          <Link href="/articles">
            <Image
              src={isDetailPage ? LogoBlue : isScrolled ? LogoBlue : LogoWhite} // Always use LogoBlue on detail pages
              alt="Logo"
              width={100}
              height={100}
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
        </h1>
        <nav>
          <UserDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Header;
