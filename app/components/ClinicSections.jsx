"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function ClinicSections() {
  const [activeTab, setActiveTab] = useState("implant");

  const sections = {
    implant: {
      title: "زراعة الأسنان",
      desc: "حلول متقدمة لتعويض الأسنان المفقودة بدقة عالية ونتائج طبيعية.",
      posters: [
        "/posters/implant1.jpg",
        "/posters/implant2.jpg",
        "/posters/implant3.jpg",
        "/posters/implant4.jpg",
      ]
    },
    kids: {
      title: "أسنان الأطفال",
      desc: "رعاية شاملة لأسنان الأطفال في بيئة مريحة وداعمة.",
      posters: [
        "/posters/kids1.jpg",
        "/posters/kids2.jpg",
        "/posters/kids3.jpg",
        "/posters/kids4.jpg",
      ]
    },
    braces: {
      title: "تقويم الأسنان",
      desc: "تصحيح اصطفاف الأسنان وتحسين الابتسامة بأحدث تقنيات التقويم.",
      posters: [
        "/posters/braces1.jpg",
        "/posters/braces2.jpg",
        "/posters/braces3.jpg",
        "/posters/braces4.jpg",
      ]
    },
    gums: {
      title: "علاج اللثة",
      desc: "علاج مشاكل اللثة باستخدام أحدث الأساليب للحفاظ على صحة الفم.",
      posters: [
        "/posters/gum1.jpg",
        "/posters/gum2.jpg",
        "/posters/gum3.jpg",
        "/posters/gum4.jpg",
      ]
    }
  };

  const tabs = [
    { id: "implant", label: "زراعة الأسنان" },
    { id: "kids", label: "أسنان الأطفال" },
    { id: "braces", label: "تقويم الأسنان" },
    { id: "gums", label: "علاج اللثة" },
  ];

  const active = sections[activeTab];

  return (
    <section className="w-full bg-white py-10">
      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-15 px-2">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full border cursor-pointer text-sm md:text-base transition

                ${activeTab === tab.id 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "border-gray-300 text-gray-700 hover:bg-blue-50"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full h-121 md:h-216">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {active.posters.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                //   width={800}
                //   height={600}
                  alt="section poster"
                  fill
                  className="object-cover md:object-contain"
                />

                {/* Overlay */}
                {/* <div className="absolute w-full h-full bg-black/20 flex flex-col justify-center px-6 md:px-16 text-white"> */}
                  {/* <h2 className="relative -bottom-[40%] text-3xl md:text-5xl font-bold mb-4">
                    {active.title}
                  </h2> */}
{/* 
                  <p className="max-w-xl text-lg md:text-xl leading-relaxed">
                    {active.desc}
                  </p> */}
                {/* </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
