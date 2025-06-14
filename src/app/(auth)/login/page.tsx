import LoginForm from "@/components/forms/login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (session) {
    redirect("/dashboard");
  }
  return <LoginForm />;
};
export default Login;
