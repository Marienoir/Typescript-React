import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='top-section'>
            <div className='top-section-bar top-sticky'>
                <div className='property-owner'>
                    <img alt='person' src={require('../images/star.png')}></img>
                    <Link to="/"><h1 style={{fontSize: '20px'}}>AGENTLY</h1></Link>
                </div>
                <div>
                    <form className='property-input'>
                        <select id="drop-down">
                            <option value="Rent">Rent</option>
                        </select>
                        <input type='input' placeholder='|  Where do you want to live?'></input>
                        <img alt='search' src={require('../images/search.png')}></img>
                    </form>
                </div>
                <div className='property-owner'>
                    <Link to="/propertyType"><p>Own a property? </p></Link>
                    <img alt='person' src={require('../images/person.png')}></img>
                    <select id="drop-down">
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header