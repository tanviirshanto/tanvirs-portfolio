import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <Navbar /> */}
      <div className="fixed top-0 left-0 right-0 z-[1000] flex flex-wrap items-center justify-end py-1 bg-[#002233] w-full">
      <div className="flex items-center  mx-3  ">
      <IoIosCall/>
        <a
          href="tel:+8801832892309"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 ml-1"
        >
          +8801832892309
        </a>
      </div>
      <div className="flex items-center mx-3  ">
      <MdOutlineEmail/>
        <a
          href="mailto:tanviir.hossen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 ml-1"
        >
          tanviir.hossen@gmail.com
        </a>
      </div>
    </div>
      <div className="container lg:h-[100ve] mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <ProjectsSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
