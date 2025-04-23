// ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#90C6BE] flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg border-2 border-white bg-transparent placeholder-white text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border-2 border-white bg-transparent placeholder-white text-white focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full p-3 rounded-lg border-2 border-white bg-transparent placeholder-white text-white focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-sm font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
