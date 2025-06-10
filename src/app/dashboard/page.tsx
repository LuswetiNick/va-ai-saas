import LogoutButton from "@/components/logout-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  return (
    <div>
      <h1>Welcome:{session?.user.name}</h1>
      Dashboard <LogoutButton />
    </div>
  );
};
export default Dashboard;
