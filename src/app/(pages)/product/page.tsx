'use client'

import Testmonial from '@/components/Testmonial'
import { contentfulClient } from '@/lib/contentfulClient'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function page() {

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
    <div className='flex flex-col w-[60%] mx-auto min-h-screen text-white justify-center py-5'>
      <h1 className='font-bold text-3xl mb-10 text-center'>Products</h1>
      <div className='grid lg:grid-cols-2 gap-5 pb-10'>
        {
          services && services.map((el, index)=> {
            return (
              <div key={index} className='flex flex-col gap-2'>
                <Image alt='cek' 
                  src={el.fields.image?.fields.file.url.startsWith('http') 
                    ? el.fields.image?.fields.file.url 
                    : `https://${el.fields.image?.fields.file.url.replace(/^\/+/, '')}`
                  }
                 width={500} height={100} className='w-full rounded-lg hover:scale-105 hover:cursor-pointer'/>
                <h2 className='font-bold text-xl'>{el.fields.title}</h2>
                <p className='text-sm'>Start from ${el.fields.price}</p>
              </div>
            )
          })
        }
      </div>
      
        <Testmonial/>
      
    </div>
  )
}
