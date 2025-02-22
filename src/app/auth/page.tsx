import AuthForm from "@/components/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const token = (await cookies()).get("session_token");
  if (token) redirect("/");
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center w-full">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
