import { Link } from "react-router-dom"

const PropertyAddress = () => {
    return (
        <div className='address'>
            <div className='container property-address'>
                <div className='address-input'>
                    <Link to="/">
                        <img id='cancel-button' alt='cancel-button' src={require('../images/cancel.png')}></img>
                    </Link>
                    <h2>Property address</h2>
                    <input type='text' placeholder='Enter an address here'></input>
                    <img alt='person' src={require('../images/address.png')}></img>
                </div>
                <hr></hr>
                <h2>Rooms</h2>
                <div className='rooms'>
                    <select id="address-drop-down">
                        <option label='Bathroom' value="2"></option>
                    </select>
                    <select id="address-drop-down">
                        <option label='Bedroom' value="2"></option>
                    </select>
                    <select id="address-drop-down">
                        <option label='Seating room' value="2"></option>
                    </select>
                    <select id="address-drop-down">
                        <option label='Kitchen' value="2"></option>
                    </select>
                    <select id="address-drop-down">
                        <option label='Kitchen' value="2"></option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PropertyAddress