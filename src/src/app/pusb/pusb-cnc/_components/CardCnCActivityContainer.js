import React from "react";
import CardCnCActivity from "./CardCnCActivity";
import { GetPUSBCNCWorkplanByCnCId } from "././pages/api/pusb-cnc";
import { WorkplanCNC } from "./src/types/pusb-cnc-type";
const CardCnCActivityContainer = async ({ id }: { id: string }) => {
  const Workplan: WorkplanCNC[] = await GetPUSBCNCWorkplanByCnCId(id);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
      {Workplan.map((work) => (
        <div key={work.id}>
          <CardCnCActivity Workplan={work} />
        </div>
      ))}
    </div>
  );
};

export default CardCnCActivityContainer;
