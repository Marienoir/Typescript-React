import { useState } from 'react'
import ImageUpload from './ImageUpload';
import PropertyAddress from './PropertyAddress'
import PropertyOwner from './PropertyOwner'
import PropertyType from './PropertyType';

const Slider = () => {
  const [switchComp, setSwitchComp] = useState(0);
  const [width, setWidth] = useState(199);
  const interval = 798 / 4;

  const handleBackBtn = () => {
    if (switchComp === 0) {
      return null
    } else {
      setWidth(width - interval)
      setSwitchComp(switchComp - 1)
    }
  }
  const handleNextBtn = () => {
    if (switchComp === 3) {
      return null
    } else {
      setWidth(width + interval)
      setSwitchComp(switchComp + 1)
    }
  }
  return (
    <div className='slider'>
      <div className='slider-image'>
        <img alt='family' src='https://st2.depositphotos.com/1594308/8293/i/950/depositphotos_82935290-stock-photo-american-family-holding-flags.jpg'></img>
      </div>
      <div className='transition'>
        <div className='line-1'></div>
        <div className='line-2' style={{ width: `${width}px` }}></div>
        {
          [
            <PropertyType properties={[
              {
                id: 1,
                image: require('../images/house.png'),
                type: "House"
              },
              {
                id: 2,
                image: require('../images/apartment.png'),
                type: "Apartment"
              },
              {
                id: 3,
                image: require('../images/land.png'),
                type: "Land"
              },
              {
                id: 4,
                image: require('../images/ware.png'),
                type: "Warehouse"
              },
              {
                id: 5,
                image: require('../images/mini.png'),
                type: "Mini flat"
              },
              {
                id: 6,
                image: require('../images/office.png'),
                type: "Office space"
              },
            ]} property={[
              {
                id: 1,
                name: "Rental",
                description: "A rented place within a multi-unit residential building or complex."
              },
              {
                id: 2,
                name: "Purchase",
                description: "A rented place within a multi-unit residential building or complex."
              },
              {
                id: 3,
                name: "Lease",
                description: "A rented place within a multi-unit residential building or complex."
              },
            ]} />,
            <PropertyAddress />,
            <PropertyOwner />,
            <ImageUpload />
          ][switchComp]
        }
      </div>
      <div>
        <div className='property-buttons'>
          <button onClick={handleBackBtn}>Back</button>
          <button onClick={handleNextBtn}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Slider