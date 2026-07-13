import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { navLinks, PERSONAL_INFO } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const activeSection = useScrollSpy(navLinks.map((link) => link.id))

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId)
        setIsMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
                isScrolled
                    ? 'bg-bg/80 backdrop-blur-xl border-b border-border shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1320px] mx-auto px-5 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Code className="w-7 h-7 text-primary " />

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Home"
                        className="text-2xl text-white font-bold hover:opacity-80 transition-opacity"
                    >
                        {PERSONAL_INFO.name.split(' ')[0]}
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`text-xl font-bold transition-all duration-300 ${
                                activeSection === link.id
                                    ? 'text-primary'
                                    : isScrolled
                                    ? 'text-text-secondary hover:text-primary'
                                    : 'text-text/70 hover:text-text'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="px-5 py-2.5 rounded-lg bg-primary text-text font-semibold hover:bg-primary-hover transition-all duration-300 hover:scale-105"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <Menu className="w-7 h-7" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-surface border-t border-border backdrop-blur-xl">
                    <div className="flex flex-col items-center gap-6 py-6">

                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`text-base font-medium transition-colors ${
                                    activeSection === link.id
                                        ? 'text-primary'
                                        : 'text-text-secondary hover:text-primary'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        <button
                            onClick={() => handleNavClick('contact')}
                            className="mt-2 px-5 py-2.5 rounded-lg bg-primary text-text font-semibold hover:bg-primary-hover transition-all duration-300"
                        >
                            Hire Me
                        </button>

                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar