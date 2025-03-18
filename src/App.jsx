import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import AppBody from './components/AppBody/AppBody.jsx'
import SpriteCarousel from './components/SpriteCarousel/SpriteCarousel.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {
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
    <>
      <Header />
      <AppBody />
      <SpriteCarousel />
      <Footer />
    </>
  )

}

export default App
