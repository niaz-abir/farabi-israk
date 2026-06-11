
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import VideoSection from "@/components/Work";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import Services from "@/components/services";


export default function Home() {
  return (
    <section className="pl-0 lg:pl-6">
      <Banner />
      <AboutMe/>
      <Services />
      <VideoSection />
      <Testimonial />
      {/* <ChooseUs /> */}
      <Footer />
    </section>
  );
}
