import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProjectProps {
  name: string
  description: string
  url: string
  github: string
  image: string
  className?: string
}

const Project = ({
  name,
  description,
  url,
  github,
  image,
  className
}: ProjectProps) => {
  console.log(image);

  return (
    <Card className="p-0 mt-8">
      <CardHeader className='p-0'>
        {/* Utilize a tag Image do Next.js para garantir otimização e controle sobre a imagem */}
        <Image src={image} alt={name} style={{ objectFit: 'cover', width: '100%', maxHeight: '500px' }} className='rounded-t' width={1000} height={1000} layout='fixed' />
      </CardHeader>
      <CardContent className='mt-4'>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='mt-2'>{description}</CardDescription>
        <Link href={github} target='_blank' className='text-sm text-slate-500 flex items-center hover:text-slate-50 transition-all'>read more <ArrowRight className='ml-2 w-4 self-center' /> </Link>
      </CardContent>
    </Card>

  )
}

export { Project }
