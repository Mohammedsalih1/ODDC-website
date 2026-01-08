"use client";

import { useState } from "react";
import Image from "next/image";
// import { assets } from "@/assets/assets";

export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    discountCode: "",
  });

  const whatsappNumber = "249123952092"; // ضع رقم العيادة هنا بدون +

  const services = [
    "التعويضات : التركيبات الثابتة او الجذور",
    "التعويضات : التركيبات المتحركة : جزئية - كاملة",
    "التعويضات : التلبيسة او التاج بمادة الزركونيوم",

    "الدعامات مع الحشوات الدائمة",

    "الاشعة التشخصية",

    "حشوات الأسنان : الحشوة الدائمة (الضوئية)",
    "حشوات الأسنان : الحشوة المؤقتة",
    "حشوات الأسنان : الحشوة العلاجية",
    "حشوات الأسنان : الحشوة المعدنية",

    "تقويم الأسنان",
    "زراعة الأسنان وبناء العظم",

    "علاج الجذور : الاسنان الامامية",
    "علاج الجذور : الاسنان الخلفية",

    "خلع الأسنان : الخلع العادي والبسيط",
    "خلع الأسنان : الخلع المعقد",
    "خلع الأسنان : خلع ضرس العقل البسيط",
    "خلع الأسنان : خلع ضرس العقل الجراحي",

    "طب الأسنان للأطفال", 
    "الخدمات التجميلية : تبييض الأسنان بالليزر",
    "الخدمات التجميلية : التبييض الكميائي",
    "الخدمات التجميلية : تلميع الأسنان",
    "الخدمات التجميلية : الفوارص التجميلية للسيدات",

  ];

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.service || !form.date) return;

    const message =
      `مرحبا، أرغب في حجز موعد:\n\n` +
      `• الاسم: ${form.name}\n` +
      `• رقم الهاتف: ${form.phone}\n` +
      `• الخدمة المطلوبة: ${form.service}\n` +
      `• الوقت المناسب: ${form.date}\n\n` +
      `• كود الخصم : ${form.discountCode}\n\n` +
      `شكرا لكم.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ---------- IMAGE ---------- */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/clinic-office.jpg" // ضع صورة الكلينك هنا
              width={800}
              height={600}
              alt="عيادة الأسنان"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ---------- FORM ---------- */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            احجز موعدك الآن <Image src="/contact.png" alt="" width={42} height={42} className="inline-block w-14 h-14 mb-1" />
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            اغتنم فرصة الحصول على رعاية أسنان مميزة على يد نخبة من الأطباء المختصين.
            كل ما عليك هو تعبئة البيانات التالية وسيتم التواصل معك مباشرة.
          </p>

          <div className="space-y-5">

            {/* الاسم */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">الاسم</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* الهاتف */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            {/* الخدمة */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                الخدمة المطلوبة
              </label>
              <select
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">اختر الخدمة</option>
                {services.map((srv, i) => (
                  <option key={i} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            {/* الوقت المناسب */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">الوقت المناسب</label>
              <input
                required
                type="datetime-local"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-gray-700 font-semibold">
                كود الخصم (اختياري)
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
                  {/* Ticket / Coupon Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 14l6-6m-6 0l6 6M5 7h14l1 4-1 4H5L4 11l1-4z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="مثال: OD2025"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition bg-white"
                />
              </div>

              {/* Optional validation message */}
              {/* <p className="text-red-500 text-sm mt-1">الكوبون غير صالح</p> */}
            </div>

            {/* أزرار */}
            <div className="flex flex-col gap-4 mt-6">

              {/* زر واتساب */}
              <button
                onClick={handleWhatsApp}
                disabled={!form.name || !form.phone || !form.service || !form.date}
                className="w-fit bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
              >
                احجز الآن 
              </button>

              {/* أرقام الاتصال */}
              <div className="text-center text-gray-700">
                <p className="font-semibold text-lg mb-2">للاتصال المباشر:</p>

                <a
                  href="tel:+249123952092"
                  className="flex items-center w-fit py-1 mb-2 px-3 rounded bg-blue-500 text-white font-bold hover:underline"
                >
                  249123952092+ 
                  <Image src="/call.png" alt="call" width={24} height={24} className="inline-block"/>
                    {/* <PhoneIconCall /> */}

                </a>

                <a
                  href="tel:+249111155569"
                  className="flex items-center w-fit py-1 px-3 rounded bg-blue-500 text-white font-bold hover:underline"
                >
                    249111155569+
                <Image src="/call.png" alt="call" width={24} height={24} className="inline-block"/>
                    {/* <PhoneIconCall /> */}
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
