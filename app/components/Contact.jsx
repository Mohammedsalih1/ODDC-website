'use client';
import Image from "next/image";
import Social from "./Social";

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            تواصل معنا
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            يسعدنا تواصلك معنا في أي وقت! يمكنك الحجز أو الاستفسار عبر الأرقام التالية أو من خلال وسائل التواصل الاجتماعي الخاصة بنا.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left side: Info */}
          <div className="space-y-6">

            {/* Phone numbers */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">اتصل بنا</h3>

              <div className="flex items-center gap-3">
                <span className="animate-ping absolute w-4 h-4 rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative w-4 h-4 bg-blue-500 rounded-full"></span>
                <a href="tel:+249111155569" className="text-lg text-gray-800 hover:text-blue-600">
                  0111155569
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="animate-ping absolute w-4 h-4 rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative w-4 h-4 bg-blue-500 rounded-full"></span>
                <a href="tel:+249123952092" className="text-lg text-gray-800 hover:text-blue-600">
                  0123952092
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            {/* <a
              href="https://wa.me/249900000000?text=مرحباً، أود حجز موعد في العيادة."
              target="_blank"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-xl transition"
            >
              احجز الآن عبر واتساب
            </a> */}

            {/* Social media */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                حسابات التواصل الاجتماعي
              </h3>

              <div className="flex flex-wrap gap-4 text-gray-700">
                <Social />
              </div>        
                <div className="flex items-center gap-3 mt-11 md:mt-0 bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-xl w-fit shadow-sm hover:shadow-md transition">
                {/* Email Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.7"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 4.73a3 3 0 003.22 0L22 8M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                </svg>

                {/* Email Text */}
                <a
                    href="mailto:Odclinic2025@gmail.com"
                    className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                >
                    Odclinic2025@gmail.com
                </a>
                </div>
            </div>
          </div>

          {/* Right side: Map + Clinic image */}
          <div className="space-y-6">
            
            {/* Clinic Image */}
            {/* <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
              <Image 
                src="/images/clinic.jpg" 
                alt="Clinic office" 
                fill 
                className="object-cover"
              />
            </div> */}

            {/* Google Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.4786999382582!2d37.21713053334923!3d19.62281221227055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15d7549f36d416c7%3A0x22e8dc9a7c37ffd4!2z2YXYs9iq2LTZgdmKINin2YTYo9mF2YrYsSDYudir2YXYp9mGINiv2YLZhtip!5e0!3m2!1sar!2s!4v1767619719241!5m2!1sar!2s"
                className="w-[100%] md:w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
