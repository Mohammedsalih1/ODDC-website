"use client";
import { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-2">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={assets.mainlogo} alt="website logo" className="w-18" />
            {/* <span className="text-blue-500 text-3xl">🦷</span>
            <span className="font-semibold text-gray-700 text-lg leading-tight">
              عيادة الأسنان<br />مستشفى عثمان دقنة
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-500">الرئيسية</Link>
            <Link href="/about" className="hover:text-blue-500">من نحن</Link>
            <Link href="/services" className="hover:text-blue-500">الخدمات</Link>
            <Link href="/doctors" className="hover:text-blue-500">الأطباء</Link>
            <Link href="/appointments" className="hover:text-blue-500">حجز موعد</Link>
            {/* <Link href="/blog" className="hover:text-blue-500">المدونة</Link> */}
            <Link href="/contact" className="hover:text-blue-500">تواصل معنا</Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 focus:outline-none text-3xl cursor-pointer hover:text-blue-500"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-gray-600 font-medium">
            <Link href="/" className="hover:text-blue-500">الرئيسية</Link>
            <Link href="/about" className="hover:text-blue-500">من نحن</Link>
            <Link href="/services" className="hover:text-blue-500">الخدمات</Link>
            <Link href="/doctors" className="hover:text-blue-500">الأطباء</Link>
            <Link href="/appointments" className="hover:text-blue-500">حجز موعد</Link>
            {/* <Link href="/blog" className="hover:text-blue-500">المدونة</Link> */}
            <Link href="/contact" className="hover:text-blue-500">تواصل معنا</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
