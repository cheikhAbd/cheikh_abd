import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Contact />
    </main>
  );
}