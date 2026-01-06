import Image from "next/image";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Header";
import AboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/Services";
import DoctorsSection from "./components/Doctors";
import AppointmentSection from "./components/Appointment";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import ClinicSections from "./components/ClinicSections";
import InsuranceSection from "./components/Companies";

export default function Home() {
//   const insuranceCompanies = [
//   "/images/insurance1.jpg",
//   "/images/insurance2.jpg",
//   "/images/insurance3.jpg",
//   // "/images/insurance4.png",
//   // "/images/insurance5.png",
//   // "/images/insurance6.png",
// ];

  return (
    <>
      <Navbar />
      <ClinicSections />
      {/* <HeaderSection /> */}
      <AboutUsSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentSection />
      <InsuranceSection  />
      <ContactUs />
      <Footer />
    </>
  );
}
