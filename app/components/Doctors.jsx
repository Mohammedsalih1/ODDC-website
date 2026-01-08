"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const doctors = [
  {
    name: "رابعة نور الدين علي خيري",
    specialty: "نائب أخصائي طب الفم",
    role: "المدير الطبي للعيادة",
    image: "/staff-members/doc1.jpg",
  },
  {
    name: "د. محمد شرعوب",
    specialty: "نائب أخصائي جراحة الفم والوجه والفكين",
    image: "/staff-members/doc2.jpg",
  },
  {
    name: "د. رؤى حمزة",
    specialty: "أخصائية الاطفال وذوي الاحتياجات الخاصة",
    role: "استشارية قريبا",
    image: "/staff-members/doc3.JPG",
  },
  {
    name: "د. شهوب محمد عبد الله",
    specialty: "طبيبة اسنان عمومي",
    image: "/staff-members/doc4.jpg",
  },
//   {
//     name: "د. حسام كمال",
//     specialty: "طبيب أسنان عام",
//     image: "/doctors/doc5.jpg",
//   },
//   {
//     name: "د. روان حسين",
//     specialty: "أخصائية أسنان أطفال",
//     image: "/doctors/doc6.jpg",
//   },
//   {
//     name: "د. خالد منصور",
//     specialty: "استشاري جراحة الفم",
//     image: "/doctors/doc7.jpg",
//   },
//   {
//     name: "د. أريج هاشم",
//     specialty: "طبيبة أسنان تجميلية",
//     image: "/doctors/doc8.jpg",
//   },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 border-b border-blue-200 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#1A3C6E]">
          فريق الأطباء <Image src="/images/team.png" alt="" width={42} height={42} className="inline-block w-14 h-14 mb-1" />
        </h2>
        <p className="text-gray-600 text-lg text-center mb-2">
            نخبة من أفضل الأطباء المتخصصين لضمان رعاية طبية متكاملة ومتكاملة لك ولعائلتك.
          </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active"
        }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {doctors.map((doc, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-xl p-4 hover:shadow-xl transition"
            >
              <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-blue-500 shadow-md">
                <Image width={300} height={300}
                  src={doc.image}
                  alt={doc.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-[#1A3C6E]">
                  {doc.name}
                </h3>
                <p className="text-gray-600 mt-1 text-[15px]">{doc.specialty}</p>
                {doc.role && (
                  <p className="text-white mx-auto py-1.5 mt-2 px-4 w-fit text-sm rounded-[37%_38%_50%_0%/75%_0%_50%_10%] bg-blue-500">{doc.role}</p>
                )}
              </div>

            </SwiperSlide>
          ))}
          <div className="custom-pagination text-center mt-8"></div>
        </Swiper>
      </div>
    </section>
  );
}
