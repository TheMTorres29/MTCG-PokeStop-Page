import { useState, useEffect } from 'react'
import './App.css'
import forSale from './assets/forSaleLogo.png'
import MTCGLogo from './assets/MTCGLogo.png'
import chienIcon from './assets/poke-icons/chien.webp'
import mimikIcon from './assets/poke-icons/mimik.png'
import dragIcon from './assets/poke-icons/drag.webp'
import gholdIcon from './assets/poke-icons/ghold.webp'
import flutterIcon from './assets/poke-icons/flutter.webp'
import ironIcon from './assets/poke-icons/iron.webp'
import zardIcon from './assets/poke-icons/zard.webp'
import typhIcon from './assets/poke-icons/typh.webp'
import gmolIcon from './assets/poke-icons/gmol.webp'

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [])
 
  return (
    <>
      <div className='app-header'>
        <div className={`logo-box ${scrolled ? 'scrolled' : ''}`}>
          <img src={MTCGLogo} alt="MTCG PokeStop Logo" className='mtcg-logo' />
        </div>
      </div>
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
              <p className='desc-text'>I will be updating/rotating my inventory as frequently as I can :)</p>
            </div>
          </div>

          <div className="desc-box">
            <p className='desc-text'>More Updates Coming Soon!</p>
          </div>

        </div>
        <div className="closing-text">
          <h2 className='header-text'>Thanks for Stopping by!</h2>
        </div>
        <div className="looping-box">
          <div className="looping-imgs-box">
            <img src={chienIcon} alt="Pokemon" className='looping-img' />
            <img src={mimikIcon} alt="Pokemon" className='looping-img' />
            <img src={dragIcon} alt="Pokemon" className='looping-img' />
            <img src={gholdIcon} alt="Pokemon" className='looping-img' />
            <img src={flutterIcon} alt="Pokemon" className='looping-img' />
            <img src={ironIcon} alt="Pokemon" className='looping-img' />
            <img src={typhIcon} alt="Pokemon" className='looping-img' />
            <img src={zardIcon} alt="Pokemon" className='looping-img' />
            <img src={gmolIcon} alt="Pokemon" className='looping-img' />
          </div>
        <div className="looping-imgs-box">
          <img src={chienIcon} alt="Pokemon" className='looping-img' />
          <img src={mimikIcon} alt="Pokemon" className='looping-img' />
          <img src={dragIcon} alt="Pokemon" className='looping-img' />
          <img src={gholdIcon} alt="Pokemon" className='looping-img' />
          <img src={flutterIcon} alt="Pokemon" className='looping-img' />
          <img src={ironIcon} alt="Pokemon" className='looping-img' />
          <img src={typhIcon} alt="Pokemon" className='looping-img' />
          <img src={zardIcon} alt="Pokemon" className='looping-img' />
          <img src={gmolIcon} alt="Pokemon" className='looping-img' />
        </div>
      </div>
      <div className="app-footer">
        <div className="insta-box">
          <a href="https://www.instagram.com/mtcg_pokestop/" className='insta-link'>
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=fefefe" alt="Insta" className='insta-icon' />
            <h3 className='footer-text'>Instagram</h3>
          </a>
        </div>
        
      </div>
    </>
  )

}

export default App
