// import { assets } from "@/assets/assets";   

export default function HeaderSection() {
  return (
    <header
      className="relative w-full h-[550px] md:h-[620px] lg:h-[650px] flex items-center z-1"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
        //   backgroundImage: `url(${backgroundImage})`, // put your image here
          backgroundImage: 'url(/images/hero.png)', // put your image here
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 text-white">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            اكتشف ابتسامتك المثالية مع فريقنا الطبي المتخصص
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-gray-200">
            نقدم لك رعاية طبية متكاملة في طب الأسنان باستخدام أحدث التقنيات
            لضمان الراحة، الجودة، والنتائج الممتازة.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-5">
            <a href="#appointment" className="bg-white cursor-pointer text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition">
              احجز موعد الآن
            </a>

            <a href="#contact" className="bg-blue-600/80 cursor-pointer text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-white rounded-t-[50px]" />
    </header>
  );
}
