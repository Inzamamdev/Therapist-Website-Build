import React from "react";

function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-900 text-center">
          Get In Touch
        </h2>
        <p className="text-sm text-center text-gray-600 mt-2 mb-6">
          Simply fill out the brief fields below and Dr. Norman will be in touch
          with you soon, usually within one business day. This form is safe,
          private, and completely free.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <input
            type="tel"
            placeholder="(555) 234-5678"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <textarea
            placeholder="How can I help you?"
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          ></textarea>
          <input
            type="text"
            placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
          <p className="text-xs text-gray-500">
            Let us know when you’re typically available for a call or
            consultation
          </p>
          <select className="w-full border border-gray-300 px-4 py-2 rounded text-gray-700 focus:outline-none focus:ring focus:ring-green-300">
            <option>Select preferred method</option>
            <option>Phone</option>
            <option>Email</option>
            <option>Text</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 text-white font-medium py-2 px-4 rounded"
          >
            Submit
          </button>

          <p className="text-xs text-gray-600 mt-2">
            ⓘ By clicking submit you consent to receive texts and emails from
            Dr. Marcia T. Norman
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
