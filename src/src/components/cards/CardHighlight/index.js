import Image from "next/image";
import { useState } from "react";
import { EventsPUSBData } from "./src/types/common.type";
import ModalActivity from "./src/app/pusb/pusb-cnc/_components/ModalActivity";

const CardHighlight = ({
  eventImage,
  eventName,
  eventDesc,
  eventTimeline,
  eventPresents,
  isPresent,
  ministry,
}: EventsPUSBData & { index: number }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row gap-x-4 space-y-3 md:space-y-0 rounded-xl shadow-lg w-full mx-auto bg-white p-4 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <div className="w-full md:w-1/2 bg-white grid place-items-center">
          <Image
            width={500}
            height={500}
            src={eventImage}
            alt={eventName}
            className="w-full h-48"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-medium">
              <span className="text-gray-800 font-bold">{ministry}</span>{" "}
              Ministry{" "}
              <span className="italic">
                {eventTimeline === "Soon" ? "Upcoming Event" : "Event"}
              </span>
            </p>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {eventName}
          </h3>
          <p className="md:text-lg text-gray-500 text-base py-1 line-clamp-3">
            {eventDesc}
          </p>
          <p className="text-sm font-bold text-gray-800">
            <span
              className={`${
                eventTimeline === "Present"
                  ? "bg-yellow-500"
                  : eventTimeline === "Completed"
                  ? "bg-green-500"
                  : "bg-red-700"
              } px-3 py-2 rounded-lg text-white`}
            >
              {eventTimeline}
            </span>
            {isPresent && eventPresents && (
              <span className="text-xs italic font-bold ml-2">
                `{eventPresents}`
              </span>
            )}
          </p>
        </div>
      </div>

      {openModal && (
        <ModalActivity
          openModal={openModal}
          handleModalDescription={() => setOpenModal(false)}
          WorkplanCNC={{
            id: "some-id",
            cnc_id: "some-cnc-id",
            duration: "some-duration",
            date_parse: "some-date",
            status: "some-status",
            title: eventName,
            description: eventDesc,
          }}
        />
      )}
    </>
  );
};

export default CardHighlight;
