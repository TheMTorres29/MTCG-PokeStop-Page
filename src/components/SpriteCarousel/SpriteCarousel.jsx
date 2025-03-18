import './SpriteCarousel.css'

const pokeSprites = [
    {id: 1, src: URL('../../assets/poke-icons/chien.webp')},
    {id: 3, src: URL('../../assets/poke-icons/drag.webp')},
    {id: 4, src: URL('../../assets/poke-icons/ghold.webp')},
    {id: 5, src: URL('../../assets/poke-icons/flutter.webp')},
    {id: 6, src: URL('../../assets/poke-icons/iron.webp')},
    {id: 9, src: URL('../../assets/poke-icons/gmol.webp')},
    {id: 7, src: URL('../../assets/poke-icons/zard.webp')},
    {id: 8, src: URL('../../assets/poke-icons/typh.webp')},
    {id: 2, src: URL('../../assets/poke-icons/mimik.png')},
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