import { TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type WithAuthOptions = {
  redirectTo: string;
  requireAuth: boolean;
};

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAuthOptions = {
    redirectTo: "login",
    requireAuth: true,
  },
) => {
  const { redirectTo = "/login", requireAuth = true } = options;

  return function AuthenticatedComponent(props: P) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);

    const isAuthenticated =
      typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : "";

    useEffect(() => {
      setMounted(true);
      setLoading(true);
    }, []);

    useEffect(() => {
      if (!mounted) return;

      if (requireAuth && !isAuthenticated) {
        const currentPath = window.location.pathname;
        router.push(
          `${redirectTo}?redirect=${encodeURIComponent(currentPath)}`,
        );
        return;
      }

      if (isAuthenticated && loading) {
        setLoading(false);
      }
    }, [mounted, loading, isAuthenticated, router]);

    // Show loading state
    if (!mounted || loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    // Show nothing while redirecting
    if (requireAuth && !isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
