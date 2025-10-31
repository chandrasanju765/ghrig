"use client";
import React, { useState } from "react";

const AssociatedSectors = () => {
  const sectors = ["IT", "Healthcare", "Finance", "Banking"];
  const [activeSector, setActiveSector] = useState("Healthcare");

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Our Associated <br />  Sectors
        </h2>
        <p className="text-gray-400 text-lg sm:text-2xl font-medium text-right max-w-xs">
          Sectors we are <br /> associated with currently
        </p>
      </div>

      {/* Sector Buttons */}
      <div className="flex flex-wrap justify-between sm:justify-start gap-4 sm:gap-8">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => setActiveSector(sector)}
            className={`w-[200px] sm:w-[280px] h-[80px] sm:h-[100px] rounded-xl font-medium text-base sm:text-lg transition-all duration-300 
              ${
                activeSector === sector
                  ? "text-white shadow-md scale-[1.02] bg-gradient-to-r from-[#141E2B] via-[#6C5DD3] to-[#B8A8FF]"
                  : "border border-gray-300 text-gray-800 bg-white hover:bg-gradient-to-r hover:from-[#141E2B] hover:via-[#6C5DD3] hover:to-[#B8A8FF] hover:text-white"
              }`}
          >
            {sector}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AssociatedSectors;
