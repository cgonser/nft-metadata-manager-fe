// hooks/useAuthRedirect.ts
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuthRedirect = (
  accessToken: string | null,
  targetPath: string
) => {
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push(targetPath);
    }
  }, [accessToken, router, targetPath]);
};
