"use client";
import { usePathname } from "next/navigation";
import Footer from "./footer/components/footer";
import Header from "./header/header";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/register") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full flex-grow">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
