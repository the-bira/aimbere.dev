'use client'

import { useTheme } from '@/contexts/ThemeContext';
import "./style.css"
import { useEffect, useState } from 'react';

interface PresentationProps {
  children: React.ReactNode;
  className?: string;
}

const Presentation = ({ children, className }: PresentationProps) => {

  const { isDarkMode } = useTheme()
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, [])

  return (
    <div className={`h-screen w-full py-24 rounded-lg scrollbar-hide overflow-hidden ${className} ${isDarkMode && isHydrated ? 'fullscreen-container-dark' : 'fullscreen-container'}`}>
      {children}
    </div>
  );
}

export { Presentation };
