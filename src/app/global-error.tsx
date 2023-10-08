"use client";
import Button from "@/components/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const resetError = () => {
    () => reset();
  };

  return (
    <html>
      <body>
        에러입니다.
        <Button value="다시 시도하기" onClick={() => resetError()} />
      </body>
    </html>
  );
}
