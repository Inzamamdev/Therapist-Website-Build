"use client";

import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    time: "",
    contactMethod: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    if (!form.contactMethod)
      newErrors.contactMethod = "Please select a contact method.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        time: "",
        contactMethod: "",
        agree: false,
      });
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 my-10">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full border border-green-900">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-900 text-center">
          Get In Touch
        </h2>
        <p className="text-sm text-center text-gray-600 mt-2 mb-6">
          Simply fill out the brief fields below and Dr. Norman will be in touch
          with you soon.
        </p>

        <form className="space-y-4 text-green-900" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border placeholder-gray-400 border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full border placeholder-gray-400 border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 234-5678"
              className="w-full border placeholder-gray-400 border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label>What brings you here</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows={4}
              className="w-full border placeholder-gray-400 border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          <div>
            <label>Preferred time to reach you</label>
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="e.g., Mornings, Evenings"
              className="w-full border border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            />
            <p className="text-xs text-gray-500">
              Let us know when you’re typically available for a call.
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to be contacted</label>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-600">{errors.agree}</p>
          )}

          <div>
            <select
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className="w-full border border-green-900 px-4 py-2 rounded focus:outline-none focus:ring"
            >
              <option value="">Select preferred method</option>
              <option>Phone</option>
              <option>Email</option>
              <option>Text</option>
            </select>
            {errors.contactMethod && (
              <p className="text-sm text-red-600 mt-1">
                {errors.contactMethod}
              </p>
            )}
          </div>

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
