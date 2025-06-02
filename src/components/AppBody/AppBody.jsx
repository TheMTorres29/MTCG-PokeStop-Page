import { motion } from 'framer-motion'
import './AppBody.css'
import forSale from '../../assets/forSaleLogo/forSale-text.png'
import TCGPLogo from '../../assets/tcgplayer-logo.png'

const TCGPLAYER_URL = "https://www.tcgplayer.com/search/all/product?seller=a700ba02&view=grid"

const AppBody = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    viewport={{ amount: "some", margin: "-200px" }}
    className='appbody-container'
  >
    <h2 className='header-text'>Links</h2>
    <section className="link-container">
      <div className="img-link-container">
        <a 
          href={TCGPLAYER_URL} 
          className="forSale-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={forSale} alt="For Sale Logo" className='forSale-img' />
        </a>
      </div>
      <div className="desc-box">
        <a 
          href={TCGPLAYER_URL} 
          className='desc-link'
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className='desc-text'>Check out my</p>
          <img src={TCGPLogo} alt="TCGPlayer" className='tcg-img' />
          <p className='desc-text'> Shop Here!</p>
        </a>
        <p className='sidenote-text'>
          I will be updating my inventory as frequently as I can :)
        </p>
      </div>
    </section>
    <h2 className='header-text'>Thanks for Stopping by!  ^.^</h2>
  </motion.div>
)

export default AppBody