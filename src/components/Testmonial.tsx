'use client';
import React from 'react'
import UnknownProfile from "../../public/unknown.jpg"
import { StaticImageData } from "next/image";
import TestiCard from './atom/TestiCard';

export interface TestiCardProps {
    name: string;
    company?: string;
    review: string;
    image?: string | StaticImageData
}

const TestiUser: TestiCardProps[] = [
    {
        name: "Petr",
        image: UnknownProfile,
        company: "Hotel Agency",
        review: "He has so much experiences in sitempas building, I love his works !!!"
    },
    {
        name: "Tomas",
        image: UnknownProfile,
        company: "Flexity.ai",
        review: "Muhamad works well, He is helping me for so much automation between our suppliers"
    },
    {
        name: "Chabib",
        image: UnknownProfile,
        company: "Crypto trader",
        review: "He built me a Bot for analitycs crypto transactions and wallet Win rates, Good job"
    },
    {
        name: "Moonsoon",
        image: UnknownProfile,
        company: "Trader",
        review: "Made me a Great Automation Bot for my effiecent work, I really love it"
    },
]

// import TestiCard from './atom/TestiCard';

export default function Testmonial() {
  return (
    <div className="w-full pt-10 min-h-[50vh] text-white font-geist-mono py-10">
      <h2 className='text-3xl pb-5 mx-auto text-center'> Our Testimonial</h2> 
      <h2 className='text-right mx-auto underline pb-5'><a onClick={()=> document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className='text-[#59E3C6] hover:cursor-pointer hover:text-blue-600'>Become our testimonial </a></h2> 
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>
          {
            TestiUser.length > 0 &&
            TestiUser.map((el, id) => {
              return (
                <TestiCard key={id} {...el}/>
              )
            })
          }
        </div>
    </div>
  )
}
