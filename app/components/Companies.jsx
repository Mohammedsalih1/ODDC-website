import Image from "next/image";
import InsuranceSection from "./Soon";

const Company = () => {
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
          شركات التأمين المتعاقدة معنا <Image src="/images/companies.png" alt="" width={42} height={42} className="inline-block w-14 h-14 mb-1" />
        </h2>

        {/* Mobile Slider */}
        {/* <div className="hidden gap-4 overflow-x-auto pb-4">
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
        </div> */}

        {/* Desktop Grid */}
        <div className="flex gap-6 mt-4">
          {/* {Companies.map((company, index) => (
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
          ))} */}
            <div
              
              className="bg-white rounded-xl shadow-sm p-2 flex flex-col items-center justify-center hover:shadow-md transition"
            >
              <Image
                src="/images/insurance1.jpg"
                width={768}
                height={960}
                alt="Insurance Logo"
                className="object-cover w-full rounded-2xl"
              />
              <h3 className="text-sm md:text-xl py-3">الشركة المتخصصة للتأمين</h3>
            </div>
            <div
              
              className="bg-white rounded-xl shadow-sm p-2 flex flex-col items-center justify-center hover:shadow-md transition"
            >
              <Image
                src="/images/insurance2.jpg"
                width={768}
                height={960}
                alt="Insurance Logo"
                className="object-cover w-full rounded-2xl"
              />
              <h3 className="text-sm md:text-xl py-3">الشركة المتحدة للتأمين</h3>
            </div>
            <div
              
              className="bg-white rounded-xl shadow-sm p-2 flex flex-col items-center hover:shadow-md transition"
            >
              <Image
                src="/images/insurance3.jpg"
                width={768}
                height={960}
                alt="Insurance Logo"
                className="object-cover w-full rounded-2xl"
              />
              <h3 className="text-sm md:text-xl pt-2">شركة البركة للتأمين</h3>
            </div>
        </div>
            <InsuranceSection />
      </div>
    </section>
  );
};

export default Company;
