import React from "react";
import { Modal } from "flowbite-react";
import ModalCardMember from "./ModalCardMember";

export const ModalMOCSData = ({ openModal, handleModalDescription }) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size="6xl"
      className="overflow-y-auto bg-opacity-75 bg-transparent"
    >
      <Modal.Header>MOCS - Ministry of Cabinet Secretary</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-bold text-xl lg:text-3xl">
              We Work Behind The Scene
            </h2>
            <p className="font-medium text-sm lg:text-base mt-1">
              Ministry of Cabinet Secretary in PUSB is the only one who handles
              all administrative stuff in all PUSB events. Only the secretary
              can make, add, delete, and change all the administrative stuff in
              PUSB events.
            </p>
          </div>
          <div>
            <div className="border-b-2 py-2 mb-2">
              <p className="font-semibold text-xl lg:text-3xl">Sub Division</p>
            </div>
            <ul className="pl-2">
              <li>
                <h1 className="text-lg font-semibold">General Secretary</h1>
                <p className="pl-2 font-medium">
                  Handling any administrative matters (proposal, MOM, and
                  letters).
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">CnC Secretary</h1>
                <p className="pl-2">
                  Supervise clubs and communities in terms of their
                  administrative matters (proposal and accountability report).
                </p>
              </li>
            </ul>
          </div>
          {/* Uncomment to display member cards */}
          {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
            </div>
          </div> */}
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">
          CC Minister of Cabinet Secretary
        </p>
      </Modal.Footer>
    </Modal>
  );
};
