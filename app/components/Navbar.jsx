"use client";
import { useState } from "react";
// import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-2">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/mainlogo.jpg" alt="website logo" width={584} height={509} className="w-18" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-500">الرئيسية</a>
            <a href="#about" className="hover:text-blue-500">من نحن</a>
            <a href="#services" className="hover:text-blue-500">الخدمات</a>
            <a href="#doctors" className="hover:text-blue-500">الأطباء</a>
            <a href="#appointment" className="hover:text-blue-500">حجز موعد</a>
            <a href="#contact" className="hover:text-blue-500">تواصل معنا</a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 focus:outline-none text-2xl cursor-pointer hover:text-blue-500"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-500">الرئيسية</a>
            <a href="#about" className="hover:text-blue-500">من نحن</a>
            <a href="#services" className="hover:text-blue-500">الخدمات</a>
            <a href="#doctors" className="hover:text-blue-500">الأطباء</a>
            <a href="#appointment" className="hover:text-blue-500">حجز موعد</a>
            <a href="#contact" className="hover:text-blue-500">تواصل معنا</a>
          </div>
        )}
      </div>
    </nav>
  );
}
