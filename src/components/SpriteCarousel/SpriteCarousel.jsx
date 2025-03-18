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
 
 const pokeSprites = [
     {id: 1, src: chienIcon},
     {id: 3, src: dragIcon},
     {id: 4, src: gholdIcon},
     {id: 5, src: flutterIcon},
     {id: 6, src: ironIcon},
     {id: 9, src: gmolIcon},
     {id: 7, src: zardIcon},
     {id: 8, src: typhIcon},
     {id: 9, src: gmolIcon},
     {id: 2, src: mimikIcon},
 
 ]

const SpriteCarousel = () => {
  return (
    <div className='sprite-container'>
        <div className="looping-container">
            {pokeSprites.map((e, id) => 
                <div className='looping-img-container'>
                    <img key={id} src={e.src} className='sprite-img' />
                </div>
            )}
        </div>
        <div className="looping-container">
            {pokeSprites.map((e, id) => 
                <div className='looping-img-container'>
                    <img key={id} src={e.src} className='sprite-img' />
                </div>
            )}
        </div>
    </div>
  )
}

export default SpriteCarousel