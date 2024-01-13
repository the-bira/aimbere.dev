import { AboutMeSection } from '@/components/AboutMeSection';
import { ContactSection } from '@/components/ContactSection';
import { MainSection } from '@/components/MainSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Section } from '@/components/Section';
import { ThemeProvider } from '@/contexts/ThemeContext';


export default function Home() {
  return (

    <main className='flex flex-col'>

      <MainSection />
      <ProjectsSection />
      <ContactSection />
      <AboutMeSection />
    </main>

  )
}

