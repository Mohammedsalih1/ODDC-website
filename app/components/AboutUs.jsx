import Image from "next/image";
import Link from "next/link";
// import { assets } from "@/assets/assets";

export default function AboutUsSection() {
  return (
    <section className="bg-[#eee] mt-0 py-20 border-b border-blue-300" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/aboutus-1.jpg"
              alt="عيادة الأسنان"
              width={1280}
              height={960}
              // fill
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/aboutus-2.jpg"
              width={960}
              height={1280}
              // fill
              alt="الفريق الطبي"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            من نحن؟ <Image src="/images/tooth-service.png" alt="" width={42} height={42} className="inline-block w-12 h-12 mb-1" />
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            في عيادة <span className="font-semibold">عثمان دقنة لطب الأسنان</span>،
نحن نمنحك العناية التي تستحقها، ونقدم لك تجربة فريدة تجمع بين الجودة والتميّز من داخل عيادتنا💎.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            يضم فريقنا مجموعة من الأطباء المتخصصين في مختلف مجالات طب الأسنان،
            لتقديم كافة الخدمات العلاجية
الجراحة-التجميل-العلاج التحفظي-التركيبات الثابته والمتحركة-تبيض الأسنان-إزالة التصبغات و المواد الجيرية-التقويم-الأطفال
          </p>

          <ul className="space-y-2 text-gray-700 text-lg">
            <li>✓ خبرة تتجاوز 10 سنوات في المجال</li>
            <li>✓ أحدث الأجهزة والتقنيات الطبية</li>
            <li>✓ بيئة علاجية مريحة وآمنة</li>
            <li>✓ متابعة دقيقة لحالة كل مريض</li>
          </ul>


          <a href="#services" className="mt-6 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            اعرف المزيد عن خدماتنا
          </a>
        </div>
      </div>
    </section>
  );
}
