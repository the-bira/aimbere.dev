import { Github, Instagram, Twitter } from 'lucide-react'
import { Presentation } from './Presentation'
import { Montserrat } from 'next/font/google'
import { Section } from './Section'

const montserrat = Montserrat({ subsets: ['latin'] })

const MainSection = () => {

  return (
    <Section className='justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden'>
      <Presentation className='py-28 flex items-center 2xl:w-2/3 justify-center'>
        <div className="ml-24 mr-24 flex flex-col items-start justify-center">
          <h1 className={`text-5xl ${montserrat}`}> Hello, I'm Aimberê</h1>
          <p className="mt-4 text-start">a seasoned full-stack developer with expertise in the JavaScript stack. My proficiency spans across Next.js, React, Node.js, and more. With a strong foundation in front-end and back-end technologies, I bring a wealth of experience in creating dynamic and scalable web applications. My passion for clean, efficient code and innovative problem-solving has driven successful projects, making me a valuable asset in delivering high-quality solutions. Let's build the future together through cutting-edge development!</p>
          <div className="flex gap-6 mt-6">
            <Github />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </Presentation>
    </Section>
  )
}

export { MainSection }