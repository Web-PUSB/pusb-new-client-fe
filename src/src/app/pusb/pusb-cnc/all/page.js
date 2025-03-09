import { GetPUSBCNC } from "./src/pages/api/pusb-cnc";
import React from "react";
import ContainerCardCnC from "./_components/ContainerCardCnC";

const page = async () => {
  let cncs = [];
  let error = null;

  try {
    cncs = await GetPUSBCNC();
  } catch (err) {
    error = `Failed to load cnc data. ${err}`;
  }

  return (
    <main className="w-full min-h-screen px-8 lg:px-16">
      <ContainerCardCnC cnc={cncs} error={error} />
    </main>
  );
};

export default page;
