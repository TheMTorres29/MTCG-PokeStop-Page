
import './AppBody.css';
import forSale from '../../assets/forSaleLogo.png'
import TCGPLogo from '../../assets/tcgplayer-logo.png'


const AppBody = () => {
  return (
    <div className='appbody-container'>
        <h2 className='header-text'>Links</h2>
        
        <div className="link-container">
          <div className="img-link-container">
            <a href="https://store.tcgplayer.com/sellerfeedback/a700ba02" className="forSale-link">
              <img src={forSale} alt="For Sale Logo" className='forSale-img' />
            </a>
          </div>
          <div className="desc-box">
            <a href="https://store.tcgplayer.com/sellerfeedback/a700ba02" className='desc-link'>

                <p className='desc-text'>Check out my</p>
                <img src={TCGPLogo} alt="TCGPlayer" className='tcg-img' />
                <p className='desc-text'> Shop Here!</p>
            </a>
            <p className='sidenote-text'>I will be updating my inventory as frequently as I can :)</p>
          </div>
        </div>

        <h2 className='header-text'>Thanks for Stopping by!</h2>

    </div>
  )
}

export default AppBody