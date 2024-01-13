'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-slate-50 dark:bg-slate-950' : 'bg-transparent'}`}>
      <div className="ml-2 mr-2 p-1 border-b-[1px] border-black dark:border-slate-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center sm:justify-between">
            <Link href="/" className='text-2xl text-slate-900'>
              <Image src="/OnlineSignatures.net-114.png" alt="logo" className='dark:invert' width={200} height={200} />
            </Link>
          </div>
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-900 dark:invert" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900 dark:invert" />
            )}
          </button>
          <div className={`lg:flex lg:flex-col lg:gap-8 lg:items-center transition-all ${isMenuOpen ? 'flex flex-col items-center mt-8' : 'hidden'}`}>
            <ul className='lg:flex lg:gap-2 lg:gap-8'>
              <li>
                <Link href="/projects"> Projects </Link>
              </li>
              <li>
                <Link href="#about"> About </Link>
              </li>
              <li>
                <Link href="#contact"> Contact </Link>
              </li>

              <li><ThemeToggle /></li>
            </ul>


          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
