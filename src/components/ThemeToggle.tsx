'use client'

import { useTheme } from '@/contexts/ThemeContext';
import dynamic from 'next/dynamic';

const Moon = dynamic(() => import('lucide-react').then((module) => module.Moon), { ssr: false });
const Sun = dynamic(() => import('lucide-react').then((module) => module.Sun), { ssr: false });

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle = ({ className }: ThemeToggleProps = {}) => {

  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className="w-fit h-fit items-center p-1 cursor-pointer self-center" onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </div>
  )
}

export { ThemeToggle }