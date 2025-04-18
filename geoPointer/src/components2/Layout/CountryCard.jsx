import { TiArrowRightThick } from 'react-icons/ti';
import {NavLink} from 'react-router-dom'
export const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country;
    return (
    <li className="country-card card ">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />

            <div className="countryInfo">
                <p className="card-title">{name.common.length >13 ? name.common.slice(0,13)+"...": name.common}</p>
                <p className='card-details'>
                    <span className="card-description">Population: </span>
                    {population.toLocaleString()}
                </p>
                <p className='card-details'>
                    <span className="card-description">Region: </span>
                    {region}
                </p>
                <p className='card-details'>
                    <span className="card-description">Capital: </span>
                    {capital[0]}
                </p>
                <NavLink to={`/country/${name.common}`}>
                    <button>Read More<TiArrowRightThick />

                    </button>
                </NavLink>
            </div>
        </div>
    
    </li>
    )
}