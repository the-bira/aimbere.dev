import Image from 'next/image'
import { Section } from './Section'

const AboutMeSection = () => {
  return (
    <Section id='about' className="justify-center mt-1 h-full">
      <div className="py-24 w-full xl:w-2/3 rounded-md px-10">
        <h1 className="text-4xl text-center font-semibold mt-4">About me</h1>
        <div className="flex-col gap-4 w-full mt-8">
          <div className="flex justify-around">
            <Image src="/me/me_alone.jpeg" alt="me" width={300} height={300} className="rounded" style={{ objectFit: 'cover' }} />
            <Image src="/me/me_laura.jpeg" alt="me" width={300} height={300} className="rounded" style={{ objectFit: 'cover' }} />
            <Image src="/me/me_handsome.jpeg" alt="me" width={300} height={300} className="rounded" style={{ objectFit: 'cover' }} />
          </div>

          <div className='w-110 flex flex-col justify-start items-start mt-8'>
            <span className="font-semibold text-lg">Aimberê Rocha Mendonça: Empowering Your Business with Expertise and Innovation</span>
            <p className="mt-4">
              At 34 years old, I bring 16 years of comprehensive experience as a full-stack developer, excelling in both front-end and back-end development. My specialization includes technologies such as NestJS, Express, and Fastify, and I am a proponent of implementing clean architectures and design patterns like SOLID and Clean Code.

              In the realm of back-end development, I have extensive experience in AWS, leveraging essential services such as API Gateway, Lambda, DynamoDB, RDS, and Cognito. My proficiency in seamlessly integrating these services results in robust and scalable solutions for your business.

              On the front-end, I showcase my versatility by proficiently working with Angular, React, and Vue. My commitment and ability to deliver integrated solutions make me a valuable resource for the success of any project.

              Ready to contribute my comprehensive experience, I am prepared to integrate into teams and apply my skills to strengthen software development within your company. I don't just sustain systems; I modernize them, turning challenges into opportunities and leveraging technology to drive your project's success.

              Imagine having me on board, seamlessly integrating with your team, bringing a wealth of comprehensive experience. I don't just sustain your system; I modernize it, turning challenges into opportunities and leveraging technology to drive your project's success.

              Whatever your vision for digital transformation, I am ready to contribute my knowledge and skills, elevating your company's software development to new heights. Trust me to be the key player that drives innovation and sustainable growth for your business.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export { AboutMeSection }