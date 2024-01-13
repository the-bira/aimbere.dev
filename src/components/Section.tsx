interface SectionProps {
  children: React.ReactNode,
  className?: string,
  id?: string
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={`flex w-full ${className}`} id={`${id}`}>
      {children}
    </section >
  )
}

export { Section }