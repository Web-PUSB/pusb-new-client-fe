/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";
import ModalActivity from "./pusb-cnc/_components/ModalActivity";
import { WorkplanCNC } from "./src/types/pusb-cnc-type";
import { formatDateNews } from "././utils/formatTime";

const CardCnCActivity = ({ Workplan }: { Workplan: WorkplanCNC }) => {
  const { day, month } = formatDateNews(Workplan.date_parse);
  const [openModal, setOpenModal] = useState(false);
  const handleModalDescription: () => void = () => {
    setOpenModal(!openModal);
  };

  return (
    <Card
      className="group relative block bg-black"
      renderImage={() => (
        <Image
          alt="Developer"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
        />
      )}
    >
      {/* <div className="relative p-4 sm:p-6 lg:p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined">
            {Workplan.duration}
          </p>
          <div className="text-center">
            <p className="text-3xl font-semibold leading tracking">{day}</p>
            <p className="leading font-bold uppercase">{month}</p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-20">
          <p className="translate-y-4 group-hover:-translate-y-4 transform transition-all duration-300">
            {Workplan.title}
          </p>
          <div className="translate-y-8 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-4">
            <p
              className="text-sm text-white hover:underline cursor-pointer transition-all duration-500"
              onClick={handleModalDescription}
            >
              {Workplan.description}
            </p>
          </div>
        </div>
      </div>

      {openModal && (
        <ModalActivity
          openModal={openModal}
          handleModalDescription={handleModalDescription}
          WorkplanCNC={Workplan}
        />
      )}     */}
    </Card>
  );
};

export default CardCnCActivity;
