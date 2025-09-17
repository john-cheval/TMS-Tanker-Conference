"use client";
import { useState } from "react";
import { Calendar, MapPin, X, Menu } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="w-full fixed z-30 bg-white shadow-sm md:shadow-none md:bg-transparent">
        <div className="max-w-full mx-4 md:mx-20 py-4 md:py-7 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={180}
              height={43}
              className="w-[140px] md:w-[180px] lg:w-[259px]"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 text-[#0C1E23] font-medium text-sm lg:text-base">
            <a href="#" className="hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Conference Programme
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Sponsors
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Partners
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Delegate Registration
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 z-30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-20 flex flex-col items-center justify-center md:hidden">
              <nav className="flex flex-col gap-8 text-[#0C1E23] font-medium text-xl text-center">
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conference Programme
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sponsors
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Delegate Registration
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-black pt-16 md:pt-0">
        {/* Background Image */}
        <Image
          src="/home_bg.png"
          alt="Hero Background"
          fill
          priority
          className="z-0 object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-28 md:top-45 z-10 px-4 w-full max-w-6xl">
          <p className="text-green-600 font-medium text-base md:text-lg mb-3 md:mb-5">
            The Maritime Standard Tanker Conference 2025
          </p>
          <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[135%] text-center capitalize text-[#0C1E23] mt-2">
            Tanker Shipping Negotiates <br className="hidden sm:block" />
            Challenging Market Headwinds
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 w-full max-w-2xl mx-auto px-4 py-3 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-[#0C1E23] bg-[#FFFFFF63] backdrop-blur-[10.4px] rounded-lg md:rounded-none md:h-[58px]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              <span>Thursday, 30th October 2025</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              <span>The Atlantis, The Palm, Dubai, UAE</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 md:mt-8 px-4">
            <button className="gradient-bg text-white font-medium rounded h-12 md:h-[53px] w-full sm:w-48">
              Become a Sponsor
            </button>
            <button className="bg-white text-gray-900 text-base font-medium h-12 md:h-[53px] w-full sm:w-48 border border-gray-300">
              Register Now
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full md:w-[85%] lg:w-[75%] py-4 md:py-6 backdrop-blur-[10.3px] bg-gradient-to-r from-[rgba(34,51,79,0.9)] to-[rgba(0,138,192,0.8)] clip-path-slant">
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 text-white w-full">
            {/* Important Dates Title */}
            <div className="flex items-center mb-4 md:mb-0">
              <p className="font-semibold text-xl md:text-2xl">
                Important <br /> Dates
              </p>
            </div>

            <span className="hidden md:block mx-1 h-10 w-px bg-blue-400/50"></span>

            {/* Date 1 */}
            <div className="flex items-center mb-4 md:mb-0 text-center md:text-left">
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold">
                  August 1, 2025
                </p>
                <p className="text-sm md:text-lg opacity-80">Call for Paper</p>
              </div>
            </div>
            <span className="hidden md:block mx-1 h-10 w-px bg-blue-400/50"></span>

            {/* Date 2 */}
            <div className="flex items-center mb-4 md:mb-0 text-center md:text-left">
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold">
                  30th September, 2025
                </p>
                <p className="text-sm md:text-lg opacity-80">
                  Early Bird Close
                </p>
              </div>
            </div>
            <span className="hidden md:block mx-1 h-10 w-px bg-blue-400/50"></span>

            {/* Date 3 */}
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl lg:text-2xl font-bold">
                30th October, 2025
              </p>
              <p className="text-sm md:text-lg opacity-80">Event Date</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
