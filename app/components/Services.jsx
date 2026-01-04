"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      title: "تنظيف وتلميع الأسنان",
      icon: "/icons/brush.svg",
      desc: "إزالة الجير وتلميع الأسنان للحصول على ابتسامة صحية ونقية."
    },
    {
      title: "حشوات الأسنان",
      icon: "/icons/tooth.svg",
      desc: "علاج التسوس وترميم الأسنان باستخدام أحدث المواد التجميلية."
    },
    {
      title: "تقويم الأسنان",
      icon: "/icons/braces.svg",
      desc: "تصحيح اصطفاف الأسنان وتحسين الابتسامة بأفضل الطرق الحديثة."
    },
    {
      title: "زراعة الأسنان",
      icon: "/icons/implant.svg",
      desc: "حل دائم لتعويض الأسنان المفقودة بجودة عالية."
    },
    {
      title: "تبييض الأسنان",
      icon: "/icons/whitening.svg",
      desc: "تفتيح لون الأسنان وإزالة التصبغات للحصول على ابتسامة لامعة بطريقة آمنة وفعالة."
    },
    {
      title: "علاج العصب",
      icon: "/icons/root-canal.svg",
      desc: "علاج جذور الأسنان المتضررة للحفاظ على السن ومنع الحاجة للخلع."
    },
    {
      title: "خلع الأسنان",
      icon: "/icons/extraction.svg",
      desc: "خلع الأسنان المتضررة أو المكسورة بطريقة آمنة وبدون ألم باستخدام أحدث التقنيات."
    },
    {
      title: "طب الأسنان للأطفال",
      icon: "/icons/kids.svg",
      desc: "رعاية خاصة لأسنان الأطفال تشمل العلاج والوقاية في بيئة مريحة وآمنة."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          خدماتنا
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          نقدم مجموعة شاملة من خدمات طب الأسنان باستخدام أحدث التقنيات لضمان راحتك وجودة علاجك.
        </p>

        {/* === SLIDER START === */}
        <Swiper
         pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active"
        }}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          // pagination={{ clickable: true }}
          dir="rtl"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image src={service.icon} alt="" width={32} height={32} className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-8"></div>

        </Swiper>
        {/* === SLIDER END === */}

      </div>
    </section>
  );
}
