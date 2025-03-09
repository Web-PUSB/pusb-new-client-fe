import Image from "next/image";
import React from "react";

interface CardWithImage {
  image: string;
  title: string;
  details: string;
}

export default function CardWithImage({
  image,
  title,
  details,
}: CardWithImage) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-xl border hover:scale-110 shadow-md hover:shadow-[#37685387] hover:shadow-2xl duration-300">
      <Image
        src={image}
        alt="PUMA Photo"
        width="60"
        height="60"
        className="py-5"
      />
      <h4 className="rounded-2xl border-2 border-[#F6931A66] px-8 py-1 text-[15px] font-[600] text-[#376853]">
        {title}
      </h4>
      <p className="px-4 py-6 text-center text-[15px] font-[600] text-[#376853]">
        {details}
      </p>
    </div>
  );
}
