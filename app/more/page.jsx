"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterGallery() {
  const cases = [
    {
      id: 1,
    //   title: "علاج البشرة",
      before: "/p1.jpg",
    //   after: "/aboutus-2.jpg",
    //   before: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?auto=format&fit=crop&w=800&q=60",
    //   after: "https://images.unsplash.com/photo-1556228724-4c2c4f4f5f57?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
    //   title: "العناية بالأسنان",
        before: "/p2.jpg",
    //   before: "https://images.unsplash.com/photo-1588776813677-8aa1a20e0f7a?auto=format&fit=crop&w=800&q=60",
    //   after: "https://images.unsplash.com/photo-1606813907291-d86efa9b40c3?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
    //   title: "خسارة الوزن",
        before: "/p3.jpg",
    //   before: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?auto=format&fit=crop&w=800&q=60",
    //   after: "https://images.unsplash.com/photo-1597431795581-9972a47eb92d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          قبل و بعد
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          نتائج حقيقية لعملائنا، تعكس جودة الرعاية والخبرة الطبية
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cases.map((item) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer group relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative h-72 w-full">
              <Image
                // src={active === item.id ? item.after : item.before}
                src={item.before}
                alt={item.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div> 

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: active === item.id ? 1 : 0 }}
              className="absolute inset-0 bg-opacity-30 flex items-center justify-center text-white text-lg font-bold"
            >
              {/* بعد */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
