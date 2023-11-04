import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  // console.log(allBlogs);
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <HowItWork />
      <section>
        <Subscribe />
      </section>
      <Footer />
    </main>
  );
}
