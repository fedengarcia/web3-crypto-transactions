import { faSearch, faShield, faThunderstorm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ServiceCard = ({title, text, icon,}) => {

    return(<div className='service-card'>
        <FontAwesomeIcon size="1x" icon={icon}/>
        <div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>)
}

const Services = () => {
    return (
        <div className='service-section'>
            <h1>Services that we continue to improve</h1>
            <div>
                <ServiceCard title={"Security Guaranteed"} text={"Security is guaranted. We always maintain privacy and mainting the quality of our products"} icon={faShield}/>
                <ServiceCard title={"Best exchange rates"} text={"Get the best rates of the crypto market"} icon={faSearch}/>
                <ServiceCard title={"Fastest transactions"} text={"Enjoy the best TPS of the entire market"} icon={faThunderstorm}/>
            
            </div>
        </div>
    );
}

export default Services;
