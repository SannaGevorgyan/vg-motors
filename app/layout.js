import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VG Motors",
  description: "The Future of Electric Mobility in Armenia",
};

export default function Layout({children}) {

  return (
    <html lang="hy">
    <title>VG Motors</title>
    <meta name="description" content="The Future of Electric Mobility in Armenia"/>
    <body className={'bg-black'}>
    <div className={`flex flex-col`}>
      <Sidebar/>
      <main className="flex-1">{children}</main>
      <div className="text-white w-full">
        <p></p>
        <p></p>
      </div>
    </div>
    </body>
    </html>
  );
}
