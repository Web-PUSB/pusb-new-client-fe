import React from "react";
import people from "@/assets/s.png"; // Adjust the path as needed

const CardMinister = ({ name, position, image }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-80 h-64">
        <div className="overflow-hidden transition duration-300 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            src={image || people}
            alt={name}
            width={300}
            height={200}
            className="object-cover w-full h-64 rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-1 text-lg font-bold text-gray-100">{name}</p>
            <p className="mb-4 text-xs text-gray-100">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMinister;
