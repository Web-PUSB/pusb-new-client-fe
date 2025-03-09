import React from "react";
import { FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import pusblogo from "./public./assets/pusblogo.png";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "./src/types/pusb-profile-type";
import { GetPUSBProfile } from "./src/pages/api/pusb-profile";
import { AiFillSpotify } from "react-icons/ai";

const Footer = async () => {
  let profilePUSB: Profile | null = null;
  let error = null;
  try {
    profilePUSB = await GetPUSBProfile();
  } catch (err) {
    profilePUSB = null;
    error = `Failed to load data.${err}`;
  }

  if (!profilePUSB) {
    return <div>{error}</div>;
  }
  return (
    <footer className="w-full h-full mt-16 bg-gray-950">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mx-auto lg:p-8 px-4">
        <div className="w-full flex flex-col items-center lg:items-start lg:px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 lg:px-0 gap-4 lg:gap-0">
            <Image
              width={500}
              height={500}
              src={pusblogo}
              className="w-20 h-24 lg:w-28 lg:h-32"
              alt="PUSB LOGO"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-base lg:text-2xl font-bold">
                President University Student Board
              </h2>
              <p className="text-base lg:text-lg font-bold">
                {profilePUSB ? profilePUSB.cabinet_name : "Sanctus Cabinet"}
              </p>
            </div>
          </div>
          <p className="text-center lg:text-left font-semibold text-sm lg:text-base mt-6">
            {profilePUSB
              ? profilePUSB.address
              : "Jababeka Education Park, Jl. Ki Hajar Dewantara, RT.2/RW.4, Mekarmukti, Cikarang Utara, Bekasi Regency, West Java 17530"}
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-around mt-4 pb-4 gap-8">
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <p className="font-medium text-base lg:text-lg">Contact Us</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex items-center gap-2">
                <MdOutlineEmail className="w-5 h-5 lg:w-6 lg:h-6" />
                <a
                  href={`mailto:${profilePUSB.email}`}
                  className="text-white underline hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profilePUSB.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <p className="font-medium text-base lg:text-lg">Find Us</p>
            <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-4 mt-4 justify-center">
              <Link href={profilePUSB?.instagram ?? "https://instagram.com"}>
                <FiInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link href={profilePUSB?.linkedin ?? "https://linkedin.com"}>
                <FiLinkedin className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link href={profilePUSB?.twitter ?? "https://twitter.com"}>
                <FiTwitter className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link href={profilePUSB?.youtube ?? "https://youtube.com"}>
                <FiYoutube className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link href={profilePUSB?.podcast ?? "https://spotify.com"}>
                <AiFillSpotify className="w-5 h-5 lg:w-6 lg:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-6 lg:py-4">
        <p className="text-center text-sm lg:text-base font-medium">
          ©PUSB 2025. All rights reserved.
          <br />
          Created by
          <span className="px-2 font-semibold">PUSB MOC Web Developer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
