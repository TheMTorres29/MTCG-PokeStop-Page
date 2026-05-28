import { motion } from 'framer-motion'
import './AppBody.css'
import CardGallery from '../CardGallery/CardGallery'
import cardBanner from '../../assets/cardbacklot.jpg'
import shopImage from '../../assets/ExploreOurShopWhite.png'

const TCGPLAYER_URL = "https://www.tcgplayer.com/search/all/product?seller=a700ba02&view=grid"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const AppBody = () => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    viewport={{ amount: "some", margin: "-100px" }}
    className='appbody-container'
  >
    <div className='banner-wrapper'>
      <img src={cardBanner} alt="Card collection banner" className='banner-img' />
    </div>

    <motion.h2 className='header-text' variants={itemVariants}>
      Pokémon Cards
    </motion.h2>

    <section className="link-container">

      <motion.div className="desc-box" variants={itemVariants}>
        <a 
          href={TCGPLAYER_URL} 
          className='desc-link'
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our TCGPlayer shop"
        >
          <img src={shopImage} alt="Explore Our TCGPlayer Shop" className='shop-img' />
        </a>
        <p className='sidenote-text'>
          Regularly updated inventory with rare finds and competitive pricing
        </p>
      </motion.div>
    </section>

    <CardGallery />

    <motion.h2 className='header-text' variants={itemVariants}>
      Thanks for Stopping by!
    </motion.h2>
  </motion.div>
)

export default AppBody