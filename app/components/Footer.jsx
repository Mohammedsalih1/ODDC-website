"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 dark:bg-gray-900 pt-12 pb-6 mt-20 border-t border-blue-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <div className="mb-4">
            <Image
              src={assets.footer}
              alt="Clinic Logo"
              className="w-32 h-auto"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            في عيادة OD نوفر لكم أفضل خدمات طب الأسنان باستخدام أحدث التقنيات، 
            لنضمن لكم راحة أكبر وابتسامة أجمل.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            روابط سريعة
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="#services" className="hover:text-blue-600">الخدمات</a></li>
            <li><a href="#doctors" className="hover:text-blue-600">الأطباء</a></li>
            <li><a href="#about" className="hover:text-blue-600">من نحن</a></li>
            <li><a href="#appointment" className="hover:text-blue-600">احجز موعد</a></li>
            <li><a href="#contact" className="hover:text-blue-600">اتصل بنا</a></li>
          </ul>
        </div>

        {/* CLINIC INFO */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            معلومات العيادة
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>اوقات العمل : صباح ومساء</li>
            <li>كل الايام حتى يوم الجمعة</li>

            {/* <li>
              رقم الهاتف 1:
              <span className="font-semibold ml-1">+249 90 000 0000</span>
            </li>

            <li>
              رقم الهاتف 2:
              <span className="font-semibold ml-1">+249 99 000 0000</span>
            </li>

            <li>
              البريد الإلكتروني:
              <a
                href="mailto:Odclinic2025@gmail.com"
                className="ml-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Odclinic2025@gmail.com
              </a>
            </li> */}
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700">
        <div className="mx-auto px-4">

          <p className="text-gray-600 text-center dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} ODDC — جميع الحقوق محفوظة.
          </p>

          {/* <p className="text-gray-500 dark:text-gray-400 text-sm">
            Designed & Developed by Mohammed
          </p> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
