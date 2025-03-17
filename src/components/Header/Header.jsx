import { useState, useEffect } from "react"
import './Header.css'
import MTCGLogo from '../../assets/MTCGLogo.png'
import snowStorm from '../../assets/snows.gif'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className="header-container">
        <div className={`app-header ${scrolled ? 'scrolled' : ''}`}>
            <div className={`logo-box ${scrolled ? 'scrolled' : ''}`}>
                <img src={MTCGLogo} alt="MTCG PokeStop Logo" className='mtcg-logo' />
            </div>
        </div>
        <div className={`storm-box ${scrolled ? 'scrolled' : ''}`}>
            <img src={snowStorm} alt="storm" className={`storm-img ${scrolled ? 'scrolled' : ''}`} />
        </div>
    </div>
  )
}

export default Header