import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="insta-box">
        <a href="https://www.instagram.com/mtcg_pokestop/" className='insta-link'>
          <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=fefefe" alt="Insta" className='insta-icon' />
          <h3 className='footer-text'>Instagram</h3>
        </a>
      </div>
    </div>
  )
}

export default Footer