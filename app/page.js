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
import ImageSlider from "./components/Slider";

export default function Home() {

  return (
    <>
      <Navbar />
      {/* <ImageSlider images={[
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
        "/posters/braces4.jpg",
        "/posters/gum1.jpg",
        "/posters/gum2.jpg",
        "/posters/gum3.jpg",
        "/posters/gum4.jpg",
        ]} /> */}
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
