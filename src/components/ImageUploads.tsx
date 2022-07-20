import { Link } from 'react-router-dom'

const ImageUploads = () => {
    return (
        <div className='slider'>
            <div className='slider-image'>
                <img alt='family' src='https://st2.depositphotos.com/1594308/8293/i/950/depositphotos_82935290-stock-photo-american-family-holding-flags.jpg'></img>
            </div>
            <div className='upload-section'>
                <Link to="/">
                    <img id='cancel-button' alt='cancel-button' src={require('../images/cancel.png')}></img>
                </Link>
                <div className='upload-top-section'>
                    <div>
                        <h3>Add at least 5 images</h3>
                    </div>
                    <div className='upload'>
                        <p>Upload</p>
                        <img alt='person' src={require('../images/upload.png')}></img>
                    </div>
                </div>
                <div className='image-section'>
                    <div className='uploaded-image'>
                        <img alt='person' src={require('../images/uploaded.png')}></img>
                    </div>
                    <div className='unuploaded'>
                        <img alt='person' src={require('../images/image1.png')}></img>
                        <img alt='person' src={require('../images/image1.png')}></img>
                    </div>
                    <div className='unuploaded'>
                        <img alt='person' src={require('../images/image1.png')}></img>
                        <img alt='person' src={require('../images/image1.png')}></img>
                    </div>
                </div>
            </div>
            <div className='property-buttons'>
                <button>Back</button>
                <Link to="/property">
                    <button id='disabled'>Finish</button>
                </Link>
            </div>
        </div>
    )
}

export default ImageUploads