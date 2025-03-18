import './SpriteCarousel.css'
import missingN0 from '../../assets/poke-icons/MissingnoIdle.webp'
 
 const pokeSprites = [
     {id: 0, src: missingN0},
     {id: 1, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png'},
     {id: 2, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png'},
     {id: 3, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/blastoise.png'},
     {id: 4, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png'},
     {id: 5, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragonite.png'},
     {id: 6, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mewtwo.png'},
     {id: 7, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/raikou.png'},
     {id: 8, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/entei.png'},
     {id: 9, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/suicune.png'},
     {id: 10, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/lugia.png'},
     {id: 11, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ho-oh.png'},
     {id: 12, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/ludicolo.png'},
     {id: 13, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/rayquaza.png'},
     {id: 14, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/deoxys.png'},
     {id: 15, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/chandelure.png'},
     {id: 16, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/giratina.png'},
     {id: 17, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/arceus.png'},
     {id: 18, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/dragapult.png'},
     {id: 19, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/mimikyu.png'},
     {id: 20, src: 'https://img.pokemondb.net/sprites/scarlet-violet/normal/chien-pao.png'},
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