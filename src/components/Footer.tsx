/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>© 2022 Agently, Inc.</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Destinations</li>
      </ul>
      <div className='globe'>
        <img alt='globe' src={require('../images/globe.png')}></img>
        <p>English(US)</p>
      </div>
    </div>
  )
}

export default Footer