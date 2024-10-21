// import Sidebar from '../components/Sidebar';
import Sidebar from "@/components/Sidebar";
import './globals.css';
import { Work_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { redirect } from "next/navigation";

const work = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'by aaadityag(github)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`flex ${work.className}`}>
        <Sidebar />
        <div className="flex-1 p-6 bg-white text-black">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
