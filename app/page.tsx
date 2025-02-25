"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useKonamiCode } from "./hooks/useKonamiCode";

export default function Home() {
  const isKonamiCode = useKonamiCode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Replace '/your-logo.svg' with your actual logo file path once added */}
      <Image
        src={isKonamiCode ? "/logo2.svg" : "/logo.svg"}
        alt="Logo"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
