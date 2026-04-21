import { useState } from 'react'
import { motion } from 'framer-motion'
import './CardGallery.css'

// Sample data - Replace with your actual card images and info
const FEATURED_CARDS = [
  {
    id: 1,
    name: 'Shining Ho-oh',
    set: 'SM Promos',
    rarity: 'Promo',
    price: '$14.90',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/146979_in_1000x1000.jpg',
    condition: 'Lightly Played'
  },
  {
    id: 2,
    name: 'Poke Pad',
    set: 'Perfect Order',
    rarity: 'Ultra Rare',
    price: '$21.77',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/684333_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  {
    id: 3,
    name: 'Unfair Stamp',
    set: 'Twilight Masquerade',
    rarity: 'ACE SPEC Rare',
    price: '$17.25',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/550209_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  {
    id: 4,
    name: 'Volcanion',
    set: 'XY Promo',
    rarity: 'Promo',
    price: '$10.55',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/127139_in_1000x1000.jpg',
    condition: 'Lightly Played'
  },
  {
    id: 5,
    name: 'Skuntank V',
    set: 'Silver Tempest',
    rarity: 'Ultra Rare',
    price: '$9.30',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/451829_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  {
    id: 6,
    name: 'Snorlax V',
    set: 'Sword & Shield Base Set',
    rarity: 'Ultra Rare',
    price: '$6.86',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/208457_in_1000x1000.jpg',
    condition: 'Lightly Played'
  },
  {
    id: 7,
    name: 'Ho-oh V (Full Art)',
    set: 'Silver Tempest',
    rarity: 'Ultra Rare',
    price: '$6.99',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/451835_in_1000x1000.jpg',
    condition: 'Lightly Played'
  },
  {
    id: 8,
    name: 'Night Stretcher',
    set: 'Mega Evolution',
    rarity: 'Ultra Rare',
    price: '$6.49',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/654512_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  {
    id: 9,
    name: 'Greninja ex',
    set: 'Scarlet % Violet Promo Cards',
    rarity: 'Promo',
    price: '$5',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/518878_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  {
    id: 10,
    name: 'Gardevoir ex',
    set: 'Scarlet & Violet Base Set',
    rarity: 'Ultra Rare',
    price: '$4.58',
    image: 'https://tcgplayer-cdn.tcgplayer.com/product/490086_in_1000x1000.jpg',
    condition: 'Near Mint'
  },
  //{
  //  id: 11,
  //  name: '',
  //  set: '',
  //  rarity: '',
  //  price: '$',
  //  image: '',
  //  condition: 'Near Mint'
  //},
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

const CardGallery = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <section className='gallery-section'>
      <div className='gallery-container'>
        <motion.h2 
          className='gallery-title'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Cards
        </motion.h2>
        
        <motion.p 
          className='gallery-subtitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Check out some of our most prized additions
        </motion.p>

        <motion.div 
          className='cards-grid'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 'some' }}
        >
          {FEATURED_CARDS.map((card) => (
            <motion.div
              key={card.id}
              className='card-wrapper'
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCard(card)}
            >
              <div className='card-image-container'>
                <img src={card.image} alt={card.name} className='card-image' />
                <div className='card-badge'>{card.condition}</div>
              </div>
              <div className='card-info'>
                <h3 className='card-name'>{card.name}</h3>
                <p className='card-set'>{card.set}</p>
                <div className='card-footer'>
                  <span className='card-price'>{card.price}</span>
                  <span className='card-rarity'>{card.rarity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for card details */}
      {selectedCard && (
        <motion.div 
          className='modal-overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCard(null)}
        >
          <motion.div 
            className='modal-content'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className='modal-close'
              onClick={() => setSelectedCard(null)}
              aria-label='Close modal'
            >
              ✕
            </button>
            <img src={selectedCard.image} alt={selectedCard.name} className='modal-image' />
            <div className='modal-info'>
              <h2>{selectedCard.name}</h2>
              <p><strong>Set:</strong> {selectedCard.set}</p>
              <p><strong>Rarity:</strong> {selectedCard.rarity}</p>
              <p><strong>Condition:</strong> {selectedCard.condition}</p>
              <p className='modal-price'>{selectedCard.price}</p>
              <p className='modal-note'>For detailed information or to purchase, visit our TCGPlayer shop.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default CardGallery
