/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'

const ImageUpload = () => {
  return (
    <div className='container'>
      <Link to="/">
        <img id='cancel-button' alt='cancel-button' src={require('../images/cancel.png')}></img>
      </Link>
      <Link to="/image-uploads">
        <div className='upload-container'>
          <img alt='person' src={require('../images/image.png')}></img>
          <h4>Add at least 5 photos</h4>
          <a href='#'>Upload from your device</a>
        </div>
      </Link>
    </div>
  )
}

export default ImageUpload