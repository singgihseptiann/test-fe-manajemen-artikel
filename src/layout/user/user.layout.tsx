import Footer from "./footer/components/footer";
import Header from "./header/header";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full">
        <div className=" ">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
