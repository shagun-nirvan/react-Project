import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../components2/UI/Loader"
import { CountryCard } from "../components2/Layout/CountryCard"

export const Country = () => {
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])
    useEffect(() => {
        startTransition(async()=>{
            const res = await getCountryData();
            setCountries(res.data);
            
        })
       
    
    }, [])

    if(isPending) return <Loader />

    return <section className="country-section">

        
        <ul className="grid grid-four-cols">{
            countries.map((curCountry, index)=>{
                return <CountryCard country={curCountry} key={index} />
            })
            }</ul>
    </section>

}
