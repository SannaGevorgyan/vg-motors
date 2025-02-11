import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-blue-700 text-2xl font-bold">
          <Image
            src="/logo.jpg"
            width={160}
            height={48}
            alt=""
          />
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/app/page.js" className="text-white hover:text-gray-200">About us</Link>
          <Link href="/app/page.js" className="text-white hover:text-gray-200">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}