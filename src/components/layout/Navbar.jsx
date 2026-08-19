import React, { useState, useEffect } from 'react'
import { Code, Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks, PERSONAL_INFO } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'
import { motion, AnimatePresence } from 'framer-motion'

const bounceTransition = {
    duration: 0.4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut"
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [bounceHire, setBounceHire] = useState(false)
    const [theme, setTheme] = useState('light')

    const activeSection = useScrollSpy(navLinks.map((link) => link.id))

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        if (saved) setTheme(saved)
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
    }, [])

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId)
        setIsMenuOpen(false)
    }

    const handleMenuToggle = () => {
        const opening = !isMenuOpen
        setIsMenuOpen(opening)

        if (opening) {
            setBounceHire(true)
            setTimeout(() => setBounceHire(false), 2500)    
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
                isScrolled
                    ? 'bg-bg/80 backdrop-blur-xl border-b border-border shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1320px] mx-auto px-5 h-20 flex items-center mt-3" >

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Code 
                    className="

                    w-8 h-8 text-primary 
                    dark:text-tropical-teal-400

                    " />

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Home"
                        className="text-2xl font-black bg-linear-to-r from-primary via-accent/80 to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity 
                        dark:bg-linear-to-r dark:from-tropical-teal-400 dark:via-mint-cream-300 dark:to-mint-cream-500 dark:hover:opacity-80"
                    >
                        {PERSONAL_INFO.name.split(' ')[0]}
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 justify-evenly flex-1 ml-12">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`text-xl font-bold transition-all duration-300 ${
                                activeSection === link.id
                                    ? 'text-primary dark:text-stone-700 dark:hover:text-stone-400'
                                    : isScrolled
                                    ? 'text-text-secondary hover:text-primary dark:text-stone-700 dark:hover:text-stone-400 '
                                    : 'text-text/70 hover:text-text dark:text-stone-700 dark:hover:text-stone-400'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Theme Toggle (desktop) */}
                <div className="hidden md:flex items-center ml-12 dark:text-gray-400">
                    <button
                        onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                        className="p-2 rounded-md text-text hover:bg-bg/10 transition-colors"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-midnight-violet-600    " />}
                    </button>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="
                        px-8 py-4 ml-12 rounded-xl bg-midnight-violet-600 text-text font-semibold hover:bg-midnight-violet-800 transition-all duration-500 hover:animated-glow 
                        dark:bg-tropical-teal-400 dark:hover:bg-tropical-teal-800 dark:text-tropical-teal-100 dark:hover:shadow-tropical-teal-400/50 dark:hover:animated-glow-secondary"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text justify-end ml-auto p-2 rounded-md hover:bg-bg/10 transition-colors dark:text-stone-400 dark:hover:bg-bg/10"
                    onClick={handleMenuToggle}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? (
                        <X className="w-7 h-7 dark:text-stone-700" />
                    ) : (
                        <Menu className="w-7 h-7 dark:text-stone-700" />
                    )}
                </button>
            </div>
                    
            

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-surface backdrop-blur-xl dark:bg-mint-cream-50"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    <div className="flex flex-col gap-6 py-2 transition-all duration-300 px-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`w-full text-right p-2 text-base font-medium transition-colors ${
                                    activeSection === link.id
                                        ? 'text-primary dark:text-primary'
                                        : 'text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-primary'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        <button
                            onClick={() => handleNavClick('contact')}
                            className={`mt-2 mb-2 px-40 py-2.5 rounded-lg bg-accent text-text font-semibold hover:bg-ring-hover dark:bg-mint-cream-400 transition-colors duration-300 ${
                                bounceHire ? 'animate-bounce' : ''
                            } mx-auto`}
                        >
                            Hire Me
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar