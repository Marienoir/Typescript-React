import { Link } from 'react-router-dom'

const PropertyOwner = () => {
    return (
        <div className='container owner-property'>
            <div className='owner'>
                <Link to="/">
                    <img id='cancel-button' alt='cancel-button' src={require('../images/cancel.png')}></img>
                </Link>
                <h2>Property Owner</h2>
                <input type='text' placeholder='IJT Realtor'></input>
            </div>
            <hr />
            <div className='description'>
                <h2>Description</h2>
                <textarea id="text-area" rows={10} cols={85}>
                    What do you have in mind?
                </textarea>
            </div>
            <div>
                <h2>Validation period</h2>
                <div className='validation'>
                    <input type='number' placeholder='6/12/2022'></input>
                    <input type='number' placeholder='23/1/2023'></input>
                </div>
            </div>
        </div>
    )
}

export default PropertyOwner