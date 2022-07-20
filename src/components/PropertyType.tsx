import React from 'react'
import { Link } from 'react-router-dom';

interface PropertyProps {
    properties: {
        id: number;
        image: string;
        type: string;
    }[]
}

interface Property extends PropertyProps {
    property: {
        id: number;
        name: string;
        description: string;
    }[]
}

const PropertyType: React.FC<Property> = (props) => {
    return (
        <div className='container property'>
            <div className='property-type'>
                <Link to="/">
                    <img id='cancel-button' alt='cancel-button' src={require('../images/cancel.png')}></img>
                </Link>
                <h2>What type of property?</h2>
                <div className='type'>
                    {props.properties.map((type) => (
                        <div key={type.id} className="card-type">
                            <p>{type.type}</p>
                            <img alt='property-type' src={type.image}></img>
                        </div>
                    ))}
                </div>
                <hr></hr>
                <h2>List property as?</h2>
                <div className='list'>
                    {props.property.map((type) => (
                        <div key={type.id} className="card-list">
                            <p>{type.name}</p>
                            <p>{type.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertyType