import Image from "next/image";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Header";
import AboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/Services";
import DoctorsSection from "./components/Doctors";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutUsSection />
      <ServicesSection />
      <DoctorsSection />
    </>
  );
}
