"use client";

import Image from "next/image";
import ImageSlider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      title: "خلع الأسنان",
      icon: "/icons/extraction.svg",
      list: ["الخلع العادي والبسيط", "الخلع المعقد", "خلع ضرس العقل البسيط ", "خلع ضرس العقل الجراحي"],
      desc: "خلع الأسنان المتضررة أو المكسورة بطريقة آمنة وبدون ألم باستخدام أحدث التقنيات."
    },
    {
      title: "التعويضات",
      icon: "/icons/brush.svg",
      list: ["التركيبات الثابتة او الجذور", "التركيبات المتحركة : جزئية - كاملة", "التلبيسة او التاج بمادة الزركونيوم" ],
      desc: "إزالة الجير وتلميع الأسنان للحصول على ابتسامة صحية ونقية."
    },
    {
      title: "حشوات الأسنان",
      icon: "/icons/tooth.svg",
      list: ["الحشوة الدائمة (الضوئية)", "الحشوة المؤقتة", "الحشوة العلاجية", "الحشوة المعدنية"],
      desc: "جميع انواع الحشوات متوفرة بداخل عيادتنا"
    },
    {
      title: "علاج الجذور",
      icon: "/icons/whitening.svg",
      list: ['الاسنان الامامية', "الاسنان الخلفية"],
      // desc: "تفتيح لون الأسنان وإزالة التصبغات للحصول على ابتسامة لامعة بطريقة آمنة وفعالة."
    },
    {
      title: "الدعامات مع الحشوات الدائمة",
      desc: "تثبيت الأسنان الضعيفة باستخدام دعامات معدنية مع حشوات دائمة لتحسين القوة والمتانة.",
      icon: "/icons/whitening.svg",
      // desc: "تفتيح لون الأسنان وإزالة التصبغات للحصول على ابتسامة لامعة بطريقة آمنة وفعالة."
    },
    {
      title: "الاشعة التشخصية",
      icon: "/icons/whitening.svg",
      desc: "اشعة بانوراما - اشعة سيفالومتري - اشعة ثلاثية الابعاد - اشعة داخل الفم"
      // desc: "تفتيح لون الأسنان وإزالة التصبغات للحصول على ابتسامة لامعة بطريقة آمنة وفعالة."
    },
    {
      title: "زراعة الأسنان وبناء العظم",
      icon: "/icons/implant.svg",
      desc: "حل دائم لتعويض الأسنان المفقودة بجودة عالية."
    },
    {
      title: "تقويم بكل انواعه والمتابعة الدورية",
      icon: "/icons/braces.svg",
      desc: "تصحيح اصطفاف الأسنان وتحسين الابتسامة بأفضل الطرق الحديثة."
    },
    {
      title: "طب اسنان الاطفال وذوي الاحتياجات الخاصة",
      icon: "/icons/kids.svg",
      desc: "رعاية خاصة لأسنان الأطفال تشمل العلاج والوقاية في بيئة مريحة وآمنة."
    },
    {
      title: "الخدمات التجميلية",
      icon: "/icons/root-canal.svg",
      list: ["تبييض الاسنان بالليزر", "التبييض الكيميائي", "تلميع الاسنان", "الفواريص التجميلية للسيدات"]
      // desc: "علاج جذور الأسنان المتضررة للحفاظ على السن ومنع الحاجة للخلع."
    },

  ];

  return (
    <section className="py-20 bg-gray-50 border-b border-blue-200" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          خدماتنا <Image src="/images/service-icon.png" alt="" width={42} height={42} className="inline-block w-14 h-14 mb-1" />
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          نقدم مجموعة شاملة من خدمات طب الأسنان باستخدام أحدث التقنيات لضمان راحتك وجودة علاجك.
        </p>

        <ImageSlider images={[
          "/images/slide-1.jpg", 
          "/images/slide-2.jpg", 
          "/images/slide-3.jpg", 
          "/images/slide-4.jpg", ]} />

        {/* === SLIDER START === */}
        <Swiper
         pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active"
        }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          // spaceBetween={30}
          // navigation
          // pagination={{ clickable: true }}
          dir="rtl"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            // 1800: { slidesPerView: 6 },
          }}
          className="pb-12 md:-mt-3 mt-2"
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
                {service.list && (
                  <ul className="text-gray-600 text-sm leading-relaxed text-right mt-4 list-disc list-inside">
                    {service.list.map((item, idx) => (  
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </SwiperSlide>
          ))}
              <div className="custom-pagination text-center mt-1"></div>

        {/* === SLIDER END === */}
        </Swiper>

      </div>
    </section>
  );
}
