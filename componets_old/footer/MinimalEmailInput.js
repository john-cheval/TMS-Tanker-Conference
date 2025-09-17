// components/MinimalEmailInput.js
"use client";

import { useState } from "react";
import { IoMdSend } from "react-icons/io";

const MinimalEmailInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md ">
      <div className="relative border-b focus-within:border-[var(--footer-blue)] transition-colors pb-1 mt-11">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email here"
          className="w-full bg-transparent outline-none pr-10 mb-10 text-[#BBBBBB] placeholder-[#BBBBBB]"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 cursor-pointer"
          aria-label="Submit email"
        >
          <IoMdSend className="text-[var(--footer-blue)]" size={30} />
        </button>
      </div>
    </form>
  );
};

export default MinimalEmailInput;
