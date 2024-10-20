'use client'; // Necessary for hooks like usePathname in components

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from "@/assets/logo.png";
import Image from 'next/image';
import { ChevronRight  } from 'lucide-react';
import User from "@/assets/user.png"

const Sidebar = () => {
  const pathname = usePathname();

  // Define sections as an array of objects to handle both title and path
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Store', path: '/store' },
    { name: 'Products', path: '/products' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Reports', path: '/reports' },
    { name: 'Docs', path: '/docs' },
  ];

  // const sections = ['Home', 'Stores', 'Products', 'Catalog', 'Promotions', 'Reports', 'Docs', 'Settings'];
  

  // Function to check if the current route matches the section path
  const isActive = (path: string) => pathname === path;

  return (
  

    <div className="w-1/4 h-screen bg-white flex flex-col border-[#dadada] border-r-[1px]">
      {/* Logo at the top */}
      <div className='border-[#dadada] border-b-[1px] my-4 mx-8 pb-5'>
        <Image src={Logo} alt="Logo" className='rounded-lg w-36' />
      </div>

      {/* Button container */}
      <div className="flex-grow flex flex-col">
        {sections.map((section) => (
          <Link
            key={section.name}
            // onClick={() => setActiveSectihref={section.path}on(section)}
            href={section.path}
            className={`py-3 px-8 hover:bg-[#ECF7FF] text-start text-sm ${isActive(section.path) ? 'text-blue-500 bg-[#ECF7FF]' : 'text-black'}`}
          >
            {section.name}
          </Link>
        ))}
      </div>

      {/* Logo at the bottom */}
      <div className='border-[#dadada] border-t-[1px] my-4 mx-8 pt-5 flex items-center gap-3'>
        <Image src={User} alt="Logo" className='rounded-full w-10 h-10' />
        {/* <User className='rounded-full w-10 h-10 border-2 border-black' /> */}
        <div className='flex flex-col '>
            <p className='text-xs'>Andy Samberg</p>
            <p className='text-xs text-[#575757]'>andysamberg@gmail.com</p>
        </div>
        <ChevronRight color='#1F8CD0' />
      </div>
    </div>
  );
};

export default Sidebar;
