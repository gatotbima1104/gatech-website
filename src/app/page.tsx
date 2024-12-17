"use client";

import Image from "next/image";
import Button from ".././components/Button";
import Section2 from "../../public/section2.png";
import Percent from "../../public/percent.png";
import Popup from "../../public/popup.png";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { FaAws, FaNode, FaNodeJs } from "react-icons/fa";
import ContactForm from ".././components/ContactForm";
import Link from "next/link";
import { useEffect, useState } from "react";  
import { contentfulClient } from "@/lib/contentfulClient";
import { SiPuppeteer, SiTypescript } from "react-icons/si";

export default function Home() {

  const [services, setServices] = useState<any []>([])
    const getService = async () => {
      try {
        const data = await contentfulClient.getEntries({
          content_type: 'serviceCompany'
        })
        setServices(data.items)
  
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=> {
      getService()
    },[])

  return (
    <main className="bg-custom-bg">
      <section className="container mx-auto h-screen flex flex-col justify-center items-center pb-20">
        <div className="max-w-4xl text-center text-white space-y-5">
          <h1 className="font-semibold sm:text-3xl lg:text-6xl leading-tight">
            Maximize Efficiency with Automation Solutions
          </h1>
          <p className="text-base px-5">
            Empower your business operations with GATOT's bespoke scripting and
            automation services. Our expert team delivers tailored solutions to
            streamline processes, reduce costs, and enhance
          </p>
          <div className="space-x-4">
            <Button bg="bg-[#42F4D2]" text="Send Inquiry" />
            <button className="py-[10px] px-[24px] rounded-[12px] text-white hover:bg-green-500 font-semibold text-[16px] border border-white">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-10 px-5">
        <div className="flex items-center justify-center -mt-[200px] relative">
          <Image alt="section-2" src={Section2} />
          <Image
            alt="percent"
            src={Percent}
            className="lg:block absolute hidden -left-10 top-72"
          />
          <Image
            alt="percent"
            src={Popup}
            className="lg:block absolute hidden -right-10 top-36"
          />
        </div>
      </section>

      <section className="container mx-auto lg:py-20 sm:py-10">
        <div className="flex justify-center items-center flex-col space-y-5">

          <Link href={'/about'}>
          <button className="py-[10px] px-[24px] rounded-full text-white hover:bg-green-500 font-semibold text-[16px] border border-[#] flex items-center space-x-1">
            <IoIosHelpCircleOutline
              size={25}
              color="#1FD655"
            />
            <span className="text-xs">About</span> <span>GATECH</span>
          </button>
          </Link>

          <h2 className="text-white sm:text-base px-5 lg:text-xl max-w-5xl text-center leading-tight pb-5">
            Based in Indonesia, we specialize in delivering cutting-edge
            scripting and automation solutions that optimize business processes
            and drive significant operational efficiency.
          </h2>

          <div className="grid grid-cols-3 text-white gap-5 w-full px-14">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-8xl sm:text-6xl font-bold">2+</h1>
              <p className="text-[14px]">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="lg:text-8xl sm:text-6xl font-bold">10+</h1>
              <p className="text-[14px]">Completed Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="lg:text-8xl sm:text-6xl font-bold">5+</h1>
              <p className="text-[14px]">Trusted companies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center text-white space-y-5">

          <Link href={'/service'}>
          <button className="py-[10px] px-[24px] rounded-full text-white hover:bg-green-500 font-semibold text-[16px] border border-[#] flex items-center space-x-1">
            <IoIosHelpCircleOutline size={25} color="#1FD655" />
            <span className="text-xs">Our</span> <span>Services</span>
          </button>
          </Link>

          <h4 className="sm:text-2xl lg:text-4xl text-center leading-tight">
            We Provide All Essential Services
          </h4>

          {/* <Catalog/> */}
          <div className='grid lg:grid-cols-2 lg:gap-5 lg:px-0 sm:px-10 sm:gap-10'>
                  {
                    services && services.map((el, index)=> {
                      return (
                        <div key={index} className='flex flex-col gap-2'>
                          <Image alt='cek' 
                            src={el.fields.image?.fields.file.url.startsWith('http') 
                              ? el.fields.image?.fields.file.url 
                              : `https://${el.fields.image?.fields.file.url.replace(/^\/+/, '')}`
                            }
                           width={500} height={100} className='w-full rounded-lg hover:scale-105 hover:cursor-pointer pb-2'/>
                          <h2 className='font-bold sm:text-base lg:text-xl'>{el.fields.title}</h2>
                          <p className='text-sm'>Start from <span className="font-bold">${el.fields.price}</span></p>
                        </div>
                      )
                    })
                  }
                </div>

              <h4 className="text-xl text-center leading-tight underline italic pt-5">
                Services are coming soon
              </h4>
        </div>
      </section>

      <section className="container mx-auto h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-white space-y-5">
          <button className="py-[10px] px-[24px] rounded-full text-white hover:bg-green-500 font-semibold text-[16px] border border-[#] flex items-center space-x-1">
            <HiOutlineCubeTransparent size={25} color="#1FD655" />
            <span className="text-xs">our</span> <span>Technology</span>
          </button>

          <h4 className="lg:text-4xl text-3xl text-center leading-tight">
            Integrated With Top Language
          </h4>
          <p className="lg:text-xl px-10 text-base text-center">
            Based in Indonesia, we specialize in delivering cutting-edge
            scripting and automation solutions that optimize business processes
            and drive significant operational efficiency.
          </p>

          <div className="grid lg:grid-cols-5 grid-cols-4 gap-2 lg:gap-5 max-w-5xl px-10">
            <button className="py-[10px] px-[18px] bg-gray-900 rounded-[12px] text-white font-semibold text-[14px] border cursor-default flex items-center hover:bg-gray-950">
              <FaAws size={20} className="mr-2" /> Electron.js
            </button>
            <button className="py-[10px] px-[18px] bg-gray-900 rounded-[12px] text-white font-semibold text-[14px] border cursor-default flex items-center hover:bg-gray-950">
              <SiPuppeteer size={20} className="mr-2" /> Puppeteer
            </button>
            <button className="py-[10px] px-[18px] bg-gray-900 rounded-[12px] text-white font-semibold text-[14px] border cursor-default flex items-center hover:bg-gray-950">
              <FaNode size={20} className="mr-2" /> Node.js
            </button>
            <button className="py-[10px] px-[18px] bg-gray-900 rounded-[12px] text-white font-semibold text-[14px] border cursor-default flex items-center hover:bg-gray-950">
              <FaNodeJs size={20} className="mr-2" /> Javascript
            </button>
            <button className="py-[10px] px-[18px] bg-gray-900 rounded-[12px] text-white font-semibold text-[14px] border cursor-default flex items-center hover:bg-gray-950">
              <SiTypescript size={20} className="mr-2" /> Typescript
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-white grid lg:grid-cols-2 gap-5 pb-20">
        <div className="flex justify-center items-center flex-col space-y-5">
          <h1 className="font-bold text-3xl leading-tight pb-5">Get Feedback in less 24 Hours</h1>
          <p className="text-justify lg:block hidden">
            Empower your business operations with GATOT's bespoke scripting and
            automation services. Our expert team delivers tailored solutions to
            streamline processes, reduce costs, and enhance
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
