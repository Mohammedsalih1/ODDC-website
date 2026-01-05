import Image from "next/image";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Header";
import AboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/Services";
import DoctorsSection from "./components/Doctors";
import AppointmentSection from "./components/Appointment";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutUsSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentSection />
      <ContactUs />
      <Footer />
    </>
  );
}
