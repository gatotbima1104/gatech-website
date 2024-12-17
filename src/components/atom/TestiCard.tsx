import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

export interface TestiCardProps {
  name: string;
  company?: string;
  review: string;
  image?: string | StaticImageData; // Accept string or StaticImageData
}

export default function TestiCard({
  name,
  company,
  review,
  image,
}: TestiCardProps) {
  return (
    <div className="border rounded-2xl p-2 flex flex-col relative max-h-[200px]">
      <p className="text-sm font-bold">{name}</p>
      <p className="text-xs pb-5">{company}</p>
      <p className="line-clamp-3 text-sm">{review}</p>
      {image && ( // Ensure image  is defined before rendering
        <Image
          src={image}
          width={40}
          height={100}
          alt={name}
          className="absolute right-2 rounded-full"
        />
      )}
    </div>
  );
}
