import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "flowbite-react";
import Foto from "./public./assets/s.png";

const CardContentWorkplan = () => {
  return (
    <Card
      className="group relative block bg-black border-0 shadow-sm shadow-white p-2"
      renderImage={() => (
        <Image
          alt="Developer"
          src={Foto}
          width={300}
          height={300}
          className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
        />
      )}
    >
      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-widest text-pink-500">
          {/* {categoryCNC} */}
          Post
          <span># 1</span>
        </p>

        {/* eventName */}
        <p className="text-lg font-bold text-white sm:text-xl">
          PRESIDENT UNIVERSITY CLUB
        </p>
        <div className="mt-12">
          <div className="pt-4 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 line-clamp-4">
            {/* {eventOrCNCLinkDetails} */}
            <Link href="https://www.instagram.com/p/C6tPCPcp1gL/?utm_source=ig_web_copy_link">
              <p className="text-sm text-white text-justify hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos suscipit ea impedit, assumenda fugiat dicta
                reiciendis, sed et aliquam aut expedita maiores, laboriosam
                eligendi dolor eaque consequuntur adipisci nihil molestiae?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardContentWorkplan;
