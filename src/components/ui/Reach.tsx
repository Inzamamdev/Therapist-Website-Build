import React from "react";
import Footer from "./Footer";
function Reach() {
  return (
    <>
      <div className="bg-[#f3f0e8] font-[freightans] text-center py-16">
        <p className="text-3xl">
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </p>
        <div className="text-xl my-8">
          <p>serena@blakepsychology.com</p>
          <p> (323) 555-0192</p>
        </div>

        <div className="text-medium mb-8">
          <p>In-person: Tue & Thu, 10 AM–6 PM</p>
          <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>
        <p>8 years of practice, 500+ sessions</p>
      </div>
      <Footer />
    </>
  );
}

export default Reach;
