import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Navigation from './Navigation';

interface HouseProps {
    properties: {
        id: number;
        image: string;
        location: string;
        distance: string;
        service?: string,
        facilities: {
            facility: any,
            count: number
        }[];
        price: string;
    }[]
}

const Properties: React.FC<HouseProps> = props => {
    return (
        <div className='nav-bar'>
            <div className='sticky'>
                <Header />
                <Nav />
            </div>
            <div className='card'>
                {props.properties.map(property => (
                    <Link to="/property">
                        <div key={property.id} className="card__body">
                            <img className='card_image_cover' src={property.image} alt='card_image'></img>
                            <p className='service'>
                                <b>{property.location}</b>
                                <p style={{backgroundColor: `${property.service === "NEW" ? '#09AA36' : '#0949AA'}`}}>{property.service}</p>
                            </p>
                            <p>{property.distance}</p>
                            <div className='card__facility'>{property.facilities?.map(prop => (
                                <div className='card__facility_desc'><img alt='card__image' src={prop.facility}></img><p>{prop.count}</p></div>
                            ))}</div>
                            <b>&#8358;{property.price}</b>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='sticky'>
                <Navigation />
                <Footer />
            </div>
        </div>
    )
}

export default Properties
