import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}