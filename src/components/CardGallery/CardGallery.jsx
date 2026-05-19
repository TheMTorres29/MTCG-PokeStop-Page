import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars
import './CardGallery.css'

const TCGPLAYER_URL = "https://www.tcgplayer.com/search/all/product?seller=a700ba02&view=grid"

// Fallback cards if API fails
const FALLBACK_CARDS = [
  {
    id: 1,
    name: 'Loading...',
    set: 'Please check your Google Sheet',
    rarity: 'Error',
    price: '$0',
    image: 'https://via.placeholder.com/250x350?text=Error',
    condition: 'N/A'
  },
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
  const [cards, setCards] = useState(FALLBACK_CARDS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch directly from Google Sheets CSV export
        const SHEET_ID = '1JlakFwxXBtBA8RvIn_y7nHCbz3A39sJqadSTIB2akMU'
        const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`

        const response = await fetch(SHEET_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch cards from Google Sheet')
        }

        const csv = await response.text()
        const cards = parseCSV(csv)

        setCards(cards.length > 0 ? cards : FALLBACK_CARDS)
      } catch (err) {
        console.error('Error fetching cards:', err)
        setError(err.message)
        setCards(FALLBACK_CARDS)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  // Helper function to parse CSV
  const parseCSV = (csv) => {
    const lines = csv.trim().split('\n')
    const headers = lines[0].split(',').map(h => h.trim())

    const cards = lines.slice(1).map((line, index) => {
      const values = line.split(',').map(v => v.trim())
      const card = { id: index + 1 }

      headers.forEach((header, headerIndex) => {
        card[header] = values[headerIndex] || ''
      })

      return card
    }).filter(card => card.name) // Filter out empty rows

    return cards
  }

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

        {error && (
          <div style={{ 
            padding: '1rem', 
            marginBottom: '1rem', 
            backgroundColor: '#ffe0e0', 
            borderRadius: '8px',
            color: '#d32f2f',
            textAlign: 'center'
          }}>
            ⚠️ Error loading cards: {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            Loading cards from Google Sheet...
          </div>
        ) : (
          <motion.div 
            className='cards-grid'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 'some' }}
          >
            {cards.map((card) => (
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
        )}
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
              <a 
                href={TCGPLAYER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className='modal-shop-button'
              >
                Visit TCGPlayer Shop
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default CardGallery
