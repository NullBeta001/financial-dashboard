import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated === false) {
        router.push("/");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    if (isAuthenticated === false) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
