"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

function ModalPortal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        createPortal(children, document.querySelector(".modal-portal")!)}
    </>
  );
}

export default ModalPortal;
