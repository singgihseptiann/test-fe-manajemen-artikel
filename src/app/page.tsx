import UserLogin from "@/features/auth/user/login/user.login";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <UserLogin />
    </div>
  );
}
