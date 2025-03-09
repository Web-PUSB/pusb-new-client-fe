"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, Modal, Button } from "flowbite-react";
import { Events } from "./src/types/pusb-event-type";
// import { formatDate } from "./src/utils/formatTime";
import { eventsPUSB } from "@./lib/data";

const CardTabEvents = ({ pusbEvent }: { pusbEvent: Events }) => {
  const [openModal, setOpenModal] = useState(false);

  // Log values for debugging
  console.log("pusbEvent.name:", pusbEvent.name);
  console.log("eventsPUSB:", eventsPUSB);

  // Use a case-insensitive, trimmed comparison
  // const matchingEvent = eventsPUSB.find(
  // (event) =>
  // event.eventName.trim().toLowerCase() ===
  // pusbEvent.name.trim().toLowerCase(),
  // );

  return (
    <>
      <Card
        className="group relative block bg-black border-0 h-52 shadow-sm shadow-white"
        renderImage={() => (
          <Image
            alt={pusbEvent.name}
            src={pusbEvent.thumbnail}
            width={200}
            height={200}
            className="absolute inset-0 w-full h-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
          />
        )}
      >
        <div className="relative p-4 sm:p-6 lg:p-4">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            <span>{pusbEvent.audience} Event</span>
          </p>
          <p className="text-xl font-bold text-white sm:text-2xl">
            {pusbEvent.name}
          </p>
          {/* <p className="text-sm font-medium tracking-wide"> */}
          {/* {formatDate(new Date().toISOString())} */}
          {/* </p> */}
          <div className="mt-8 lg:mt-16">
            <div className="-translate-y-16 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <Button
                onClick={() => setOpenModal(true)}
                className="text-white bg-pink-600 hover:bg-pink-700"
              >
                View Description
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{pusbEvent.name}</Modal.Header>
        <Modal.Body>
          <p className="text-white-700">{pusbEvent.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardTabEvents;
