import { useEffect } from "react";
import { useRouter } from "next/router";
import auth from "../lib/firebase/init";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await auth.signOut();
        router.replace("/auth/login");
      } catch (error) {
        console.error("Logout error:", error.message);
      }
    };

    handleLogout();
  }, []);

  return <></>;
};

export default LogoutPage;
