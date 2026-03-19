import Hero from "./_sections/Hero/hero";
import Projects from "./_sections/Projects/projects";
import About from "./_sections/About/about";
import Skills from "./_sections/Skills/skills";
import Footer from "./_sections/Footer/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
