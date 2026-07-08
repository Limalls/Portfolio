import react, {useState, useEffect}from 'react'
import {Code, Menu, Section, X} from 'lucide-react'
import {navLinks} from '../../utils/constants'
import {useScrollSpy, scrollTosection} from '../../hooks/useScrollSpy'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useScrollSpy(navLinks.map((link) => link.id));


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavCLick = (SectionId) => {
        scroolToSection(SectionId);
        setIsMenuOpen(false);
    }


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled 
                ? 'bg-white shadow-md' 
                : 'bg-transparent'}`}
            style={{ transform: translate3d(0, 0, 0) }}
        >
            <div className="">
                <div className="">
                    <div className="flex items-center gap-4">
                        <code className="w-6 h-6 text-primary" />

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className=""
                            aria-label="home"
                        >
                            {PERSONAL_INFO.name.split(' ')[0]}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav 
                </div>
            </div>
    )
   
}


export default Navbar