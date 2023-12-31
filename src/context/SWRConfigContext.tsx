"use client";
import { axiosStore } from "@/service";
import { PropsWithChildren, useEffect } from "react";
import { SWRConfig } from "swr";
import { getCookie } from "cookies-next";

function SWRConfigContext({ children }: PropsWithChildren) {
  useEffect(() => {
    axiosStore.setToken(getCookie("access_token") ?? "");
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          axiosStore.authInstance.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
}

export default SWRConfigContext;
