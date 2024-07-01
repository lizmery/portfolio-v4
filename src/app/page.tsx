import Image from "next/image"
import Hero from "@/components/hero/Hero"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"
import Resume from "@/components/resume/Resume"
import Contact from "@/components/contact/Contact"
import About from "@/components/about/About"

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  )
}
