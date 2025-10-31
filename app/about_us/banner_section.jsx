import React from "react";
import Image from "next/image";
import corporate from "../../public/assets/images/corporate.png";
import logo from "../../public/assets/images/logo.png";

export default function banner_section() {
  return (
    <div>
      <div className="bg-section   ">
        <div className="flex justify-center ">
        <div className="height-section  w-3xl">
          <h1 className="aheading text-[64px] font-medium leading-[60px] text-white text-center  font_family_jakarta">
            Smarter Hiring,
            <br className="hidden lg:block" /> Stronger Careers
          </h1>
          </div>
        </div>

        <div className=" mt-5 flex items-center justify-between">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            <div className="col-span-1  items-end  flex justify-start">
              {" "}
              <div className="p-3  text-center">
                <div className="flex items-center gap-2">
                  <Image src={corporate} alt="Logo" width={280} height={50} />
                </div>
              </div>
            </div>
            <div className="col-span-1  items-end flex justify-center">
              {" "}
              <div className="p-3  text-center">
                <div className="flex flex-col  items-center gap-2">
                     <div className="height-section  w-3xl">
          <h1 className="aheading text-[64px] font-medium leading-[60px] text-white text-center  font_family_jakarta">
            Smarter Hiring,
            <br className="hidden lg:block" /> Stronger Careers
          </h1>
          </div>
                  <div className="bg-white mt-4 -mb-[9px] px-[80px] py-1 rounded-4xl">
                    <Image src={logo} alt="Logo" width={100} height={50} />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-span-1   flex justify-end">
              {" "}
              <div className="p-3  text-center">
                <div className="flex items-center gap-2">
                  <Image src={corporate} alt="Logo" width={280} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 flex items-center justify-center">
          <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
            <div className="col-span-1 mt-8  ml-[50px] ">
              {" "}
              <div className="p-3  text-center">
                <div className="flex items-center gap-2">
                  <Image src={corporate} alt="Logo" width={300} height={50} />
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-10 ml-[24px]  flex ">
              {" "}
              <div className="p-3  text-center">
                <div className="flex items-center gap-2">
                  <Image src={corporate} alt="Logo" width={300} height={50} />
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-8    ">
              {" "}
              <div className="p-3  text-center">
                <div className="flex items-center gap-2">
                  <Image src={corporate} alt="Logo" width={300} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
