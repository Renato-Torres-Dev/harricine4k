import Link from "next/link"
import React from "react"

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made by
        <Link href={"https://unicoder.vercel.app"} target="_blank">
          <strong className="text-medium">Unicoder Soluções Tecnológicas</strong>
        </Link>
      </span>
    </footer>
  )
}