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
        <div>Navbar</div>
    )
}

export default Navbar