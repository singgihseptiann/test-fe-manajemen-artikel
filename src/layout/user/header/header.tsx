import { UserDropdown } from "@/layout/user/header/components/dropdown.menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link href="/">BrandName</Link>
        </h1>
        <nav>
          <UserDropdown />
        </nav>
      </div>
    </header>
  );
};

export default Header;
