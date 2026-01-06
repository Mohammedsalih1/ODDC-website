import Image from "next/image";

const InsuranceSection = () => {
        const Companies = [
        "/images/insurance1.jpg",
        "/images/insurance2.jpg",
        "/images/insurance3.jpg",
        // "/images/insurance4.png",
        // "/images/insurance5.png",
        // "/images/insurance6.png",
        ];
  return (
    <section className="w-full py-16 bg-gray-50" id="insurance">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          شركات التأمين المتعاقدة معنا
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4">
          {Companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border-4 border-blue-500 flex items-center justify-center"
            >
              <Image
                src={company}
                width={768}
                height={960}
                alt="Insurance Logo"
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {Companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-2 flex items-center justify-center hover:shadow-md transition"
            >
              <Image
                src={company}
                width={768}
                height={960}
                alt="Insurance Logo"
                className="object-contain max-h-28 w-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsuranceSection;
