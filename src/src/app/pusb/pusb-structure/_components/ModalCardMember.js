import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import people from "./public./assets/s.png";
const ModalCardMember = () => {
  return (
    <div className="w-full flex flex-col items-center shadow-sm shadow-gray-800">
      <Image
        className="w-44 h-44 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
        alt="team picture"
        width={500}
        height={500}
        src={people}
      />
      <div className="text-center mt-6">
        <h1 className="text-xl font-bold mb-1">Denice Jagna</h1>

        <div className="font-light mb-2">External Affairs</div>

        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
          <Link
            href="#"
            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
          >
            <FiLinkedin className="text-indigo-700 mx-auto mt-2" />
          </Link>

          <Link
            href="#"
            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
          >
            <FiTwitter className="text-blue-400 mx-auto mt-2" />
          </Link>

          <Link
            href="#"
            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
          >
            <FiInstagram className="text-orange-400 mx-auto mt-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalCardMember;
