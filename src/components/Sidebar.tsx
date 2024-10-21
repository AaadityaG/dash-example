'use client'; // Necessary for hooks like usePathname in components

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react'; // Import Menu icon
// import User from "@/assets/images/user.png";

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar visibility

  // Define sections as an array of objects to handle both title and path
  const sections = [
    { name: 'Home', path: '/home' },
    { name: 'Store', path: '/store' },
    { name: 'Products', path: '/products' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Reports', path: '/reports' },
    { name: 'Docs', path: '/docs' },
  ];

  // Function to check if the current route matches the section path
  const isActive = (path: string) => pathname === path;

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-1/4 h-screen bg-white flex-col border-[#dadada] border-r-[1px] hidden lg:flex md:flex">
        {/* Logo at the top */}
        <div className='border-[#dadada] border-b-[1px] my-4 mx-8 pb-5'>
          <Image src={'/images/logo.png'} alt="Logo" className='rounded-lg w-36' width={144} height={144} />
        </div>

        {/* Button container */}
        <div className="flex-grow flex flex-col">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.path}
              className={`py-3 px-8 hover:bg-[#ECF7FF] text-start text-sm ${isActive(section.path) ? 'text-blue-500 bg-[#ECF7FF]' : 'text-black'}`}
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* User info at the bottom */}
        <div className='border-[#dadada] border-t-[1px] my-4 mx-8 pt-5 flex items-center gap-3'>
          <Image src={'/images/user.png'} alt="User" className='rounded-full ' width={32} height={32} />
          <div className='flex flex-col'>
            <p className='text-xs'>Andy Samberg</p>
            <p className='text-xs text-[#575757]'>andysamberg@gmail.com</p>
          </div>
          <ChevronRight color='#1F8CD0' />
        </div>
      </div>

      {/* Hamburger button for mobile */}
      <div className="lg:hidden md:hidden absolute top-[71px] left-[0px] z-40">
        <button onClick={toggleSidebar} className="bg-[#53acff] p-[0.5px] rounded-full text-white text-xs">
          <ChevronRight  className={`${isSidebarOpen ? 'rotate-180 transform delay-75 text-xs' : " text-xs rotate-0 transform delay-75"}`} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`h-screen min-h-full bg-white flex-col border-[#dadada] border-r-[1px] flex absolute w-1/2 z-30 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden md:hidden`}>
        {/* Logo at the top */}
        <div className='border-[#dadada] border-b-[1px] my-4 mx-8 pb-5'>
          <Image src={'/images/logo.png'} alt="Logo" className='rounded-lg ' width={144} height={144} />
        </div>

        {/* Button container */}
        <div className="flex-grow flex flex-col">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.path}
              className={`py-3 px-8 hover:bg-[#ECF7FF] text-start text-sm ${isActive(section.path) ? 'text-blue-500 bg-[#ECF7FF]' : 'text-black'}`}
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* User info at the bottom */}
        <div className='border-[#dadada] border-t-[1px] my-4  pt-5 flex items-center gap-3'>
          <Image src={'/images/user.png'} alt="User" className='rounded-full ' width={32} height={32}/>
          <div className='flex flex-col'>
            <p className='text-xs'>Andy Samberg</p>
            <p className='text-xs text-[#575757]'>andysamberg@gmail.com</p>
          </div>
          <ChevronRight color='#1F8CD0' />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
