import React from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import { Card } from "flowbite-react";

const CardCnC = ({ cnc }) => {
  return (
    <Card className="group relative block bg-black border-0 h-52 shadow-sm shadow-white">
      <div className="relative">
        <img
          alt={cnc.short_name}
          src={cnc.image}
          width={300}
          height={300}
          className="absolute inset-0 h-full w-30 ml-20 object-fit opacity-75 transition-opacity group-hover:opacity-50"
        />
      </div>

      <div className="relative p-4 sm:p-6 lg:p-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-800">
          <span>{cnc.category}</span>
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          {cnc.short_name}
        </p>
        <p className="text-sm font-medium tracking-wide text-gray-100">
          {cnc.full_name}
        </p>

        <div className="mt-8 lg:mt-16">
          <div className="-translate-y-16 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Link to={`/pusb-cnc/${cnc.id}`}>
              <p className="text-sm text-white text-justify hover:underline">
                {cnc.description}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardCnC;
