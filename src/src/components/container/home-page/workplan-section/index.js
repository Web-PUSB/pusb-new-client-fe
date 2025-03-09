import React from "react";
import CardWorkplan from "./src/components/cards/CardWorkplan";
import { mainWorkplanPUSB } from "./pusb./lib/data";

const HomeMainWorkplanSection = ({
  element,
}: {
  element: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="w-full min-h-[90vh] px-8 lg:px-16 py-8" ref={element}>
      <div className="w-full mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold leading">
          <span className="flex items-center">
            <span className="h-px flex-1 bg-white"></span>
            <span className="shrink-0 px-4 lg:px-6">
              Sanctus Cabinet Workplans
            </span>
            <span className="h-px flex-1 bg-white"></span>
          </span>
        </h1>
      </div>
      <div className={`w-full grid grid-cols-1 lg:grid-cols-${mainWorkplanPUSB.length} gap-8 py-8`}>
        {mainWorkplanPUSB.map((Workplan, index) => (
          <React.Fragment key={index}>
            <CardWorkplan index={index} {...Workplan} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HomeMainWorkplanSection;
