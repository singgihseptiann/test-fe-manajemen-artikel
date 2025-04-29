import Image from "next/image";
import LogoWhite from "@/assets/user/logo/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 bg-[#2563EBDB] p-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 md:flex-row md:items-center md:justify-center">
        <div className="mb-4 md:mb-0">
          <Image
            src={LogoWhite}
            alt="Logo"
            className="h-auto w-24"
            width={96}
            height={96}
          />
        </div>

        <p className="text-center md:text-left">
          &copy; {currentYear} Blog genzet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
