"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();
  return (
    <div 
    className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2"
    onClick={() => router.push("/")}
    >
    <Image src={"/Logo.jpeg"} alt="Logo" width={50} height={50} priority/>
    <h1 className="font-bold text-xl">JG-DEV</h1>

    </div>
  )
}
export default Logo