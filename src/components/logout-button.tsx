"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login"); // redirect to login page
            },
          },
        })
      }
    >
      Logout
    </Button>
  );
};
export default LogoutButton;
