import React from "react";
import Image from "next/image";
function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full max-w-6xl mx-auto mt-16 sm:my-48 justify-around gap-10 px-4">
        <div className="text-[#7e7e6b] font-[freightans] sm:w-1/2 order-1">
          <p className="font-bold text-2xl sm:text-3xl mb-6">
            About Dr. Serena Blake
          </p>

          <p className="text-medium sm:text-lg font-extralight leading-relaxed mt-4 font-sans order-3 sm:order-2">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

        <div className="order-2 sm:order-3 sm:w-1/2 flex justify-center">
          <Image
            src="/AboutImg.jpg"
            alt="Dr. Serena Blake"
            height={500}
            width={500}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <hr className="border-t border-[#7e7e6b] my-10 w-[90%] mx-auto border-2" />
    </>
  );
}

export default About;
