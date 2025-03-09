import React from "react";
import { Modal } from "flowbite-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ModalCardMember from "./ModalCardMember";

interface ModalActivityProps {
  openModal: boolean;
  handleModalDescription: () => void;
}

export const ModalMOCSData: React.FC<ModalActivityProps> = ({
  openModal,
  handleModalDescription,
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size={`6xl`}
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
              Ministry of Cabinet Secretary in PUSB is the only one who handle
              all administrative stuffs in all PUSB events. Only the secretary
              can make, add, delete and change all the administrative stuffs in
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
          {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
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

export const ModalMOFData: React.FC<ModalActivityProps> = ({
  openModal,
  handleModalDescription,
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size={`6xl`}
      className="overflow-y-auto bg-opacity-75 bg-transparent"
    >
      <Modal.Header>MOF - Ministry of Finance</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-bold text-xl lg:text-3xl">
              We Handling Financial Things in PUSB Events
            </h2>
            <p className="font-medium text-sm lg:text-base mt-1">
              Ministry of Finance is the one who handling all the budgeting in
              PUSB event, responsible for sponsor, also the President Store.
            </p>
          </div>
          <div>
            <div className="border-b-2 py-2 mb-2">
              <p className="font-semibold text-xl lg:text-3xl">Sub Division</p>
            </div>
            <ul className="pl-2">
              <li>
                <h1 className="text-lg font-semibold">Administrative</h1>
                <p className="pl-2 font-medium">
                  <b>A. ACCOUNTANT</b>
                  Record all transaction of PUSB cash and President Store.
                  <b>B. TREASURER</b>
                  Becoming a treasurer in every PUSB events, handle PUSB cash in
                  internal PUSB and saving the money.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Entrepreneur</h1>
                <p className="pl-2">
                  <b>A. SPONSORSHIP</b>
                  Find sponsorship for PUSB’s events and handle 3P (PUSB
                  Partnership Program).
                  <b>B. PRESIDENT STORE</b>
                  Gaining more profits by selling merchandise with President
                  University’s logo.
                </p>
              </li>
            </ul>
          </div>
          <div>
            {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
            </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">CC Minister of Finance</p>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalMOSAData: React.FC<ModalActivityProps> = ({
  openModal,
  handleModalDescription,
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size={`6xl`}
      className="overflow-y-auto bg-opacity-75 bg-transparent"
    >
      <Modal.Header>MOSA - Ministry of Student Activity</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-bold text-xl lg:text-3xl">
              Supervised and Handling Student Activity
            </h2>
            <p className="font-medium text-sm lg:text-base mt-1">
              Ministry of Student Activity responsible to supervise the clubs
              and communities in President University and also handling events
              related to art, sport, and society. Also, we become the bridge for
              the regular night students.
            </p>
          </div>
          <div>
            <div className="border-b-2 py-2 mb-2">
              <p className="font-semibold text-xl lg:text-3xl">Sub Division</p>
            </div>
            <ul className="pl-2">
              <li>
                <h1 className="text-lg font-semibold">Art</h1>
                <p className="pl-2 font-medium">
                  Handling events in art division.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Sport</h1>
                <p className="pl-2">Handling events in sport division.</p>
              </li>
              <li>
                <h1 className="text-lg font-semibold">Society</h1>
                <p className="pl-2 font-medium">
                  Handling events in society division.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Regular Night</h1>
                <p className="pl-2">
                  Bridge between PUSB and regular night students.
                </p>
              </li>
            </ul>
          </div>
          <div>
            {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
            </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">CC Minister of Finance</p>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalMOSDData: React.FC<ModalActivityProps> = ({
  openModal,
  handleModalDescription,
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size={`6xl`}
      className="overflow-y-auto bg-opacity-75 bg-transparent"
    >
      <Modal.Header>MOSD - Ministry of Student Development</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-bold text-xl lg:text-3xl">We Are The Brain</h2>
            <p className="font-medium text-sm lg:text-base mt-1">
              Ministry of Self Development responsible to accommodates conducive
              environment for student through leadership promotion, character
              building, skill and knowledge enhancement, correspondingly in
              research and evaluation.
            </p>
          </div>
          <div>
            <div className="border-b-2 py-2 mb-2">
              <p className="font-semibold text-xl lg:text-3xl">Sub Division</p>
            </div>
            <ul className="pl-2">
              <li>
                <h1 className="text-lg font-semibold">Advocation</h1>
                <p className="pl-2 font-medium">
                  To hold the rules and regulation of PUSB as a legal
                  organization at the President University. Furthermore,
                  advocation members are responsible to hold the unity value of
                  of the organization and improving character building of the
                  member.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">
                  Research and Development
                </h1>
                <p className="pl-2">
                  Promote growth and development for PUSB members and activities
                  through aspiration, research and evaluation for the better
                  performance in the next moment.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Skill and Knowledge</h1>
                <p className="pl-2">
                  Enrich skill and knowledge of President University students
                  through digital media such as articles, podcast, study issues,
                  and training for the PUSB members.
                </p>
              </li>
            </ul>
          </div>
          <div>
            {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
            </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">CC Minister of Finance</p>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalMOCData: React.FC<ModalActivityProps> = ({
  openModal,
  handleModalDescription,
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={handleModalDescription}
      size={`6xl`}
      className="overflow-y-auto bg-opacity-75 bg-transparent"
    >
      <Modal.Header>MOC - Ministry of Communication</Modal.Header>
      <Modal.Body>
        <div className="h-[75vh] overflow-y-auto w-full space-y-6 text-black bg-white px-4 lg:px-8 py-4">
          <div className="border-b-2 pb-2">
            <h2 className="font-bold text-xl lg:text-3xl">
              The Bridge Between All Presunivers and PUSB
            </h2>
            <p className="font-medium text-sm lg:text-base mt-1">
              Ministry of Communication as the bridge of Presunivers, PUSB, and
              external parties. We handling all the PUSB’s social media and
              informations.
            </p>
          </div>
          <div>
            <div className="border-b-2 py-2 mb-2">
              <p className="font-semibold text-xl lg:text-3xl">Sub Division</p>
            </div>
            <ul className="pl-2">
              <li>
                <h1 className="text-lg font-semibold">Internal Affairs</h1>
                <p className="pl-2 font-medium">
                  As bridge between PUSB and Presunivers. Handling PUSB board,
                  PUSB’s official account.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">External Affairs</h1>
                <p className="pl-2">
                  As bridge between PUSB and External parties (companies, media
                  partner and BEM relation).
                </p>
              </li>
              <li>
                <h1 className="text-lg font-semibold">Multimedia</h1>
                <p className="pl-2 font-medium">
                  Make design, take photo or make video for PUSB’s activity.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Social Media Specialist</h1>
                <p className="pl-2">
                  Handling PUSB’s Tiktok, Youtube, and Podcast.
                </p>
              </li>
              <li>
                <h1 className="text-lg font-medium">Web Developer</h1>
                <p className="pl-2">Handling PUSB’s website.</p>
              </li>
            </ul>
          </div>
          <div>
            {/* <div>
            <p className="text-2xl font-semibold">All Members of MOCS</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 mt-4">
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
              <ModalCardMember />
            </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-center h-10">
        <p className="text-sm text-white font-bold">
          CC Minister of Communication
        </p>
      </Modal.Footer>
    </Modal>
  );
};
