import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-[#f3f0e8] ">
      <div className="w-[92%] mx-auto pb-14">
        <div className="font-[freightans] flex items-center py-10 sm:py-14">
          <Image src="/logo.png" alt="logo" height="50" width="50" />
          <div className="text-[#3f5d4c] text-lg">
            <p className="">Dr. Serena Blake,</p>
            <p>PsyD (Clinical Psychologist)</p>
          </div>
        </div>

        <div className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className=" absolute object-cover min-h-full "
          >
            <source
              src="https://res.cloudinary.com/dxnnjfduu/video/upload/v1751518787/HeroVideo_1_psbyr2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 font-[freightans] font-bold text-white text-center mt-40 leading-relaxed">
            <h1 className="text-4xl md:text-6xl font-bold">
              Psychotherapy That Helps
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mt-5">
              You Thrive, Not Just Cope
            </h1>
            <p className="mt-4 text-lg sm:text-2xl font-[freightans] font-light">
              Telehealth therapy tailored for adults, available in Michigan and
              30+ PSYPACT states.
            </p>
            <div className="mt-20 font-sans text-lg font-semibold">
              <a
                href="#"
                className="bg-[#94b0b0]  py-4 sm:py-6 px-4 sm:px-6 rounded-full text-white text-center uppercase inline-block"
              >
                Book a Free Consult
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
