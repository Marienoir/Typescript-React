import Footer from "./Footer"
import Header from "./Header"

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header />
      <div className='property-section'>
        <div className='prop-details'>
          <div>
            <h2>3 Bedroom Apartment at Ikoyi</h2>
            <div className='location'>
              <p>Lagos, NG</p>
              <p className='blue'>NEW</p>
            </div>
          </div>
          <div>
            <ul>
              <li>Description</li>
              <li>Map view</li>
            </ul>
          </div>
        </div>
        <div className='details'>
          <img className='details-img' alt='person' src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80'></img>
          <div className='details-desc'>
            <h2>Owned by : IJT Realtor </h2>
            <div className='details-desc-images'>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/bed.png')}></img>
                <p>Bedroom (3)</p>
              </div>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/bath.png')}></img>
                <p>Bathroom (3)</p>
              </div>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/bed.png')}></img>
                <p>Seating room (1)</p>
              </div>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/bath.png')}></img>
                <p>Kitchen (1)</p>
              </div>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/toilet.png')}></img>
                <p>Toilets (3)</p>
              </div>
              <div className='details-desc-image'>
                <img alt='person' src={require('../images/toilet.png')}></img>
                <p>Toilets (3)</p>
              </div>
            </div>
            <p>3 bedroom House for sale at Ikoyi The Local Government Council Headquarters Lagos
              Imo selling for ₦30,000,000. See property details on Agently or browse all our range
              of properties in Ikoyi 3 bedroom House for sale in Ikoyi Buy 3 bedroom House for sale
              All Ensuite 4 Bedroom Detached Bungalow in Ikoyi is a House.
            </p>
            <p>....</p>
            <p><u>Show More</u>   &gt; </p>
            <div className='buttons'>
              <button>Buy now:  ₦30,000,000</button>
              <button>
                <img alt='person' src={require('../images/star.png')}></img>
              </button>
              <button>
                <img alt='person' src={require('../images/star.png')}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PropertyDetails