// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay, Pagination } from "swiper/modules";

// export default function ClinicSections() {
//   // const [activeTab, setActiveTab] = useState("implant");

//   const sections = {

//       posters: [
//         "/posters/implant1.jpg",
//         "/posters/implant2.jpg",
//         "/posters/implant3.jpg",
//         "/posters/implant4.jpg",
//         "/posters/kids1.jpg",
//         "/posters/kids2.jpg",
//         "/posters/kids3.jpg",
//         "/posters/kids4.jpg",
//         "/posters/braces1.jpg",
//         "/posters/braces2.jpg",
//         "/posters/braces3.jpg",
//         "/posters/braces4.jpg",
//         "/posters/gum1.jpg",
//         "/posters/gum2.jpg",
//         "/posters/gum3.jpg",
//         "/posters/gum4.jpg",
//       ]
//     };

//   // const active = sections[activeTab];

//   return (
//     <section className="w-full bg-white py-10">

//       {/* Slider */}
//       <div className="relative w-full h-108 md:h-216">
//         <Swiper
//           modules={[EffectFade, Autoplay, Pagination]}
//           effect="fade"
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           className="h-full w-full"
//         >
//           {active.posters.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 <Image
//                   src={src}
//                 //   width={800}
//                 //   height={600}
//                   alt="section poster"
//                   fill
//                   className="object-cover md:object-contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSlider() {

  // const image = {[
  //   "gfdgfdg",
  //   "gfdgfdg",
  // ]}

  const images = [
        "/posters/implant1.jpg",
        "/posters/implant2.jpg",
        "/posters/implant3.jpg",
        "/posters/implant4.jpg",
        "/posters/kids1.jpg",
        "/posters/kids2.jpg",
        "/posters/kids3.jpg",
        "/posters/kids4.jpg",
        "/posters/braces1.jpg",
        "/posters/braces2.jpg",
        "/posters/braces3.jpg",
        "/posters/gum1.jpg",
        "/posters/gum2.jpg",
        "/posters/gum3.jpg",
        "/posters/gum4.jpg",
        ];


  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <div className="relative w-full h-112 md:h-216 md:rounded-2xl mt-22 overflow-hidden">

      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute px-4 inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${i}`}
            fill
            className="object-cover md:object-contain md:rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}
