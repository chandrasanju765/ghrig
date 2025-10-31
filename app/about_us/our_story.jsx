import React from "react";
import Image from "next/image";
import origin_story from "../../public/assets/images/origin_story.png"

export default function our_story() {
  return (
    <div>
      <div className="flex p-3 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 sm:py-20 max-w-7xl w-full ">
            <div className=" col-span-1">
                <Image src={origin_story} alt="" height={400} width={400} />
            </div>
          <div className="flex flex-col justify-center items-center h-100 col-span-1">
 <h2
            className="text-start sm:text-center text-black sm:leading-16 font-medium sm:text-[64px] leading-[44px] text-[39px] font_family_jakarta"

          >             Our Origin Story: <br className="hidden lg:block" />
             Built For the Real<br className="hidden lg:block" /> World
            </h2>
            <p className="mt-4 text-[#141414B2] text-start sm:text-end font-medium text-[16px] font_family_display">GHRig started as a student project to fix outdated hiring systems <br className="hidden lg:block" />— now, it’s a growing platform backed by experience in UX, <br className="hidden lg:block" />recruitment, AI, and behavioral systems.<br className="hidden lg:block" />
Our founders have worked across design schools, corporate HR<br className="hidden lg:block" /> trenches, and tech labs. We didn’t build this in a vacuum — we<br className="hidden lg:block" /> talked to hundreds of users across the hiring spectrum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
