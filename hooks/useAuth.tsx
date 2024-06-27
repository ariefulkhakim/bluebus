// src/hooks/useAuth.ts
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useToast } from "native-base";
import { useRouter } from "expo-router";

const useAuth = () => {
  const context = useContext(AuthContext);
  const toast = useToast();
  const route = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { signIn, signOut, signUp, user } = context;

  const enhancedSignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signIn(email, password);
      route.navigate("/home");
      //   toast.show({ title: 'Sign in successful', status: 'success' });
    } catch (error) {
      //   toast.show({ title: `Sign in error: ${error.message}`, status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const enhancedSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      route.navigate("/sign-in");
      //   toast.show({ title: 'Sign out successful', status: 'success' });
    } catch (error) {
      //   toast.show({ title: `Sign out error: ${error.message}`, status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const enhancedSignUp = async (
    name: string,
    phone_number: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    try {
      await signUp(name, phone_number, email, password);
      route.navigate("/home");
      //   toast.show({ title: 'Sign up successful, check your email for the confirmation link.', status: 'success' });
    } catch (error) {
      //   toast.show({ title: `Sign up error: ${error.message}`, status: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    signIn: enhancedSignIn,
    signOut: enhancedSignOut,
    signUp: enhancedSignUp,
  };
};

export default useAuth;
