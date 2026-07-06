import react from 'react'
import {Code, Menu, Section, X} from 'lucide-react'
import {navLinks} from '../../utils/constants'
import { useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection = useScrollSpy(navLinks.map((link) => link.id))];


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