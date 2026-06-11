import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import SkillsSection from '@/components/sections/Skills';
import ExperienceSection from '@/components/sections/Experience';
import ProjectsSection from '@/components/sections/Projects';
import ResumeSection from '@/components/sections/Resume';
import TestimonialsSection from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
