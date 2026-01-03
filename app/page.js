import Image from "next/image";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Header";
import AboutUsSection from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutUsSection />
    </>
  );
}
