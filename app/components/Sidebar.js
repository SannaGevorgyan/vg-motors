"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {label: "ԳԼԽԱՎՈՐ", path: "/"},
  {label: "ՄԵՐ ՄԱՍԻՆ", path: "/about"},
  {label: "ԿԱՊ", path: "/contact"},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className={'relative'}>
      <div className="text-white flex flex-col absolute md:top-[40px] left-0 z-40">
        <div className="flex md:justify-center my-2 md:my-4 w-20 md:w-full">
          <Image src="/images/logo.png" alt="Logo" width={150} height={80} priority/>
        </div>
        <nav className="w-screen md:w-[220px] flex md:flex-col justify-between md:justify-normal md:gap-6 text-lg font-bold border-r border-b border-t border-gray-400 p-7 md:p-10 md:pb-40 md:pr-2">
          {navItems.map(({label, path}) => (
            <Link key={path} href={path} className="flex items-center gap-5 text-xs md:text-base">
            <span
              className={`w-4 h-4 rounded-full ${
                pathname === path ? "bg-white" : ""
              }`}
            />
              <span className="text-white">
              {label}
            </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}