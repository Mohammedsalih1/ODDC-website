import { ShieldCheck } from "lucide-react";

export default function InsuranceSection() {
  const companies = [
    "شركة النيلين للتأمين",
    "الصندوق الطبي لشركة ارباب للتعدين",
    "حزمة الخدات الطبية",
    "سي اي اس هيلث كير CIS Healthcare",
  ];

  return (
    <section className="py-20 bg-white" id="insurance">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            وقريبا...
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {companies.map((company, i) => (
            <div
              key={i}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-8
                         hover:border-blue-500 hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100
                              flex items-center justify-center group-hover:bg-blue-500 transition">
                <ShieldCheck className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>

              <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">
                {company}
              </h3>

              <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full
                               bg-blue-50 text-blue-600 font-medium">
                قريبًا
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
