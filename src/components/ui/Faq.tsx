"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icon lib

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "WWhat is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white max-w-3xl mx-auto p-6 rounded-xl shadow font-[freightans] my-20">
      <h2 className="text-4xl font-serif text-center text-[#175275] mb-10">
        Frequently Asked Questions
      </h2>
      <h3 className="text-[#175275] font-semibold mb-4 text-3xl">Therapy</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full text-2xl text-left flex items-center justify-between text-[#175275] border-b pb-2"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#175275]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#175275]" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-xl text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
