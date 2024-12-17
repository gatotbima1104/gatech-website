'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ITeam {
  name: {
    first: string
    last: string
  },
  picture: {
    large: string
  },
  email: string
}

export default function page() {
  const [teams, setTeams] = useState<ITeam []>([])

  const getTeams = async () => {
    try {

      const localDate = localStorage.getItem('dateTeam')
      const memberTeam = localStorage.getItem('memberTeam')

      if(localDate && memberTeam){
        const parsedLocatDate = Date.now() - parseInt(localDate)
        if(parsedLocatDate < 60000){
          setTeams(JSON.parse(memberTeam))
          return
        }
      }

      const res = await fetch('https://randomuser.me/api/?results=6', {
        next: {
          revalidate: 600
        }
      })

      const data = await res.json()
      setTeams(data.results)

      localStorage.setItem('memberTeam', JSON.stringify(data.results))
      localStorage.setItem('dateTeam', Date.now().toString())
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getTeams()
  }, [])  

  return (
    <div className='flex flex-col w-[60%] mx-auto min-h-screen text-white justify-center gap-5 py-10'>
        <h1 className='text-2xl text-center font-bold mb-5'>Meet with Out Teams</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            teams && teams.map((el, index) => {
              return (
                <div key={index} className='flex flex-col'>
                  <Image alt='p' src={el.picture.large} width={100} height={50} className='w-full h-auto rounded-lg mb-2'/>
                  <h2 className='text-white font-bold'>{el.name.first + ' ' + el.name.last}</h2>
                  <p>{el.email}</p>
                </div>
              )
            })
          }
          
        </div>
    </div>
  )
}
