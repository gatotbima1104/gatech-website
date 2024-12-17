"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ITeam {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

export default function page() {
  const [teams, setTeams] = useState<ITeam[]>([]);

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
      console.log(error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="w-full min-h-screen justify-center flex text-white py-5 flex-col">
      <div className="w-[50%] mx-auto">
        <h1 className="font-bold text-2xl py-5 text-center">History</h1>
        <div>
          <p className="text-justify">
            This company was built for everyone that want to cut off their wasting time for Automation and Repetitive Task <br /> <br />
            The CEO was an Amazing Freelancer that handled more than <strong>15+ Clients</strong> & <strong>30+ Project Completed</strong>
          </p>
        </div>

        <h1 className="font-bold text-2xl text-center py-10">Teams</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams &&
            teams.map((el, index) => {
                 // Assign a role to each team member based on their index
                const roles = ["Frontend Developer", "Backend Developer", "Web Scraper", "Automation Engineer", "Fullstack Developer", "Dev Ops"];

              return (
                <div key={index} className="flex flex-col">
                  <Image
                    alt="p"
                    src={el.picture.large}
                    width={100}
                    height={50}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                  <h2 className="text-white font-bold">
                    {el.name.first}
                  </h2>
                  <p className="text-sm">as {roles[index]}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}
