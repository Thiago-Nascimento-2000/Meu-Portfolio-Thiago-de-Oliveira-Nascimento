import Hero from "./_sections/Hero/Hero";
import Projects from "./_sections/Projects/Projects";
import About from "./_sections/About/About";
import Skills from "./_sections/Skills/Skills";
import Footer from "./_sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
