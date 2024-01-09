"use client";
import { axiosStore } from "@/service";
import { PropsWithChildren, useEffect, useState } from "react";
import { SWRConfig } from "swr";
import { getCookie, setCookie } from "cookies-next";
import { LOGIN_API } from "@/service/login";
import { useRouter } from "next/navigation";

function SWRConfigContext({ children }: PropsWithChildren) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const refreshToken = getCookie("refresh_token");
    if (refreshToken) {
      LOGIN_API.reissueToken(refreshToken)
        .then((res) => {
          axiosStore.setToken(res.data.accessToken);
          setCookie("refresh_token", res.data.refreshToken);
          setIsReady(true);
        })
        .catch((e) => {
          router.push("/");
        });
    }
  }, [router]);

  if (!isReady) return <>{children}</>;

  return (
    <SWRConfig
      value={{
        fetcher: ([url, params]: [string, Object]) =>
          axiosStore.authInstance.get(url, { params }).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRConfigContext;
