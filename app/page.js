import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="text-lg text-gray-700 mb-6">A simple Next.js homepage with a navbar and footer.</p>
        {/*<Image*/}
        {/*  src="https://source.unsplash.com/800x400/?nature,water"*/}
        {/*  width={800}*/}
        {/*  height={400}*/}
        {/*  alt="Beautiful Nature"*/}
        {/*  className="rounded-lg shadow-lg"*/}
        {/*/>*/}
      </main>
      <Footer />
    </div>
  );
}