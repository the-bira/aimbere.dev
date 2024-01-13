import payload from 'payload'
import { Project } from './Project'
import { Section } from './Section'
import { Button } from './ui/button'

interface Project {
  id: string | number
  name: string
  description: string
  url?: string
  github?: string
  image?: string
  createdAt?: string
  updatedAt?: string
}

type ProjectProps = Project
interface ProjectsSectionProps {
  projects: Project[]
}
const ProjectsSection = async () => {

  const response = await payload.find({
    collection: 'projects',

  })

  const Projects: Project[] = response.docs

  return (
    <Section className='justify-center mt-1 h-full'>
      <div className="py-24 w-full xl:w-2/3 rounded-md px-10">
        <h1 className="text-4xl text-center font-semibold mt-4">Cases</h1>
        <div className="mt-8 flex-col lg:flex lg:flex-row gap-8">
          {Projects.map((project, index) => (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              url={project.url || ''}
              github={project.github || ''}
              image={project.image?.url || ''}
              className="max-w-50 h-fit"
            />
          ))}
        </div>
      </div>
    </Section>
  )

}

export { ProjectsSection }