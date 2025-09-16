// app/providers.tsx
"use client";

import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
}
