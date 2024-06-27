import GlobalStatusBar from "@/components/reusable/StatusBarGlobal";
import { AuthContext } from "@/context/AuthContext";
import { Slot, Stack, useRouter } from "expo-router";
import { useContext, useEffect } from "react";

const AuthMiddleware: React.FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (authContext && !authContext.user) {
      router.replace("/");
    } else {
      router.replace("/home");
    }
  }, [authContext]);

  if (!authContext) {
    return null; // atau bisa juga loading indicator
  }

  return (
    <>
      <GlobalStatusBar />
      <Slot />
    </>
  );
};

export default AuthMiddleware;
