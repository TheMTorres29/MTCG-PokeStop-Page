import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import SpriteCarousel from './components/SpriteCarousel/SpriteCarousel.jsx'
import Footer from './components/Footer/Footer.jsx'
import forSale from './assets/forSaleLogo.png'


const App = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY < 50) {
  //       setScrolled(false);
  //     } else {
  //       setScrolled(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  // }, [])
 
  return (
    <>
      <Header />
      <div className="app-body">
        <h2 className='header-text'>Links</h2>
        <div className="box-set">
          <div className="link-box">
            <a href="https://store.tcgplayer.com/sellerfeedback/a700ba02" className="forSale-link">
              <img src={forSale} alt="For Sale Logo" className='forSale-logo' />
            </a>
          </div>
          <div className="desc-box">
            <a href="https://store.tcgplayer.com/sellerfeedback/a700ba02">
              <p className='desc-text'>Check out my TCGPlayer Shop Here!</p>
            </a>
            <p className='desc-text'>I will be updating my inventory as frequently as I can :)</p>
          </div>
        </div>
      </div>
      <div className="closing-text">
        <h2 className='header-text'>Thanks for Stopping by!</h2>
      </div>
      <SpriteCarousel />
      <Footer />
    </>
  )

}

export default App
