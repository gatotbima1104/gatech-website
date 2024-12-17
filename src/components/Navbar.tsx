'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CgMenuLeftAlt } from 'react-icons/cg'
import { usePathname } from 'next/navigation';

import Logo from "../../public/logo.webp"
import Link from 'next/link';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const path = usePathname()

  const isActive = (pathname: string) => {
    return path === pathname
  }

  const isClickedMenu = () => {
    setIsOpen(!isOpen)
  }

    // close burger when lg automatically
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsOpen(false);
        }
      };
  
      // Add event listener on window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    
    <nav className='w-full h-[90px] text-white bg-gradient-to-l from-black to-green-900 shadow-lg font-bold flex justify-between items-center sm:px-20 lg:px-32 font-geist-mono sticky top-0 z-10'>
        <Image alt='logo' src={Logo} width={60} height={50} className='rounded-xl'/>
        <ul className='lg:flex gap-10 hidden items-center'>
          {
            [
              {id: "home", label: "Home", link: "/"},
              {id: "service", label: "Service", link: "/product"},
              {id: "team", label: "Team", link: "/team"},
              {id: "about", label: "About Us", link: "/about"},
            ].map((el, idx) => {
              return (
                <Link href={
                  el.link
                } key={idx}>
                <li
                  className={`cursor-pointer p-2 rounded-xl ${
                    isActive(el.link) ? "bg-gradient-to-t from-green-800" : "hover:bg-gradient-to-t from-green-900"
                  }`}
                  >
                    {el.label}
                </li>
                  </Link>
              )
            })
          }
        </ul>


        <button className='lg:hidden' onClick={isClickedMenu}> 
          <CgMenuLeftAlt size={30}/>
        </button>

        <ul className={`${isOpen? 'block': 'hidden'} bg-gradient-to-l from-black to-green-900 absolute w-full min-h-screen text-white left-0 top-20 grid grid-rows-6 items-center justify-start pl-20 gap-10`}>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/">Home</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/team">Teams</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/product">Service</Link></li>
            <li className='hover:text-[#59E3C6] text-3xl'><Link href="/about">About</Link></li>
        </ul>
    </nav>
    

  )
}
