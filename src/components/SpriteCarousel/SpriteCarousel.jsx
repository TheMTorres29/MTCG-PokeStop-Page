import './SpriteCarousel.css'
import chienIcon from '../../assets/poke-icons/chien.webp'
import mimikIcon from '../../assets/poke-icons/mimik.png'
import dragIcon from '../../assets/poke-icons/drag.webp'
import gholdIcon from '../../assets/poke-icons/ghold.webp'
import flutterIcon from '../../assets/poke-icons/flutter.webp'
import ironIcon from '../../assets/poke-icons/iron.webp'
import zardIcon from '../../assets/poke-icons/zard.webp'
import typhIcon from '../../assets/poke-icons/typh.webp'
import gmolIcon from '../../assets/poke-icons/gmol.webp'

const SpriteCarousel = () => {
  return (
    <div className='spritecar-container'>
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
    </div>
  )
}

export default SpriteCarousel