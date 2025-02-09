"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
      audioRef.current
        .play()
        .catch((error) => console.log("Audio playback failed:", error));
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#E8F4FC] overflow-hidden flex items-center justify-center">
      <Image
        src="/quizy-background.svg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
      <audio ref={audioRef} src="/Walen - Gameboy (freetouse.com).mp3" loop />
    </div>
  );
}
