import React from "react";

function RatesAndInsurance() {
  return (
    <div className="bg-[#94b0b0] py-16 px-4 font-[freightans]">
      <div className="max-w-3xl mx-auto text-center text-black">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
          Rates and Insurance
        </h2>
        <p className="text-lg mb-4 font-sans font-extralight">
          Session Fee - $200 / individual session
        </p>
        <p className="text-lg mb-6 font-sans font-extralight">
          Session Fee - $240 / couples session
        </p>

        <p className="text-3xl md:text-4xl font-serif font-medium mb-4">
          Services & Specialties:
        </p>
        <ol
          className="text-center text-medium font-sans font-extralight
        "
        >
          <li>Anxiety & Stress Management </li>
          <li>Relationship Counseling</li>
          <li> Trauma Recovery</li>
        </ol>
      </div>
    </div>
  );
}

export default RatesAndInsurance;
