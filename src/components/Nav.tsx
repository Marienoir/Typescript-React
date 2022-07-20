const Nav = () => {
    return (
        <div className='top-section-list'>
            <ul>
                <li>House</li>
                <li>Office Space</li>
                <li>Flat and Apartments</li>
                <li>Lands</li>
                <li>Semi Detached Bungalow</li>
                <li>Semi Detached Duplex</li>
                <li>Warehouse</li>
                <li>Mini Flat</li>
                <li>Shop in a mall</li>
                <li style={{marginTop:'5px'}}><img alt='globe' src={require('../images/more.png')}></img></li>
                <div className="filter">
                <img style={{marginRight:'5px'}} alt='globe' src={require('../images/filter.png')}></img>
                <p>Filters</p>
                </div>
            </ul>
        </div>
    )
}

export default Nav