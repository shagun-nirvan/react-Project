import countryFacts from "../api/countryData.json";
export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are some Interesting Facts <br /> 
                of different countries.
            </h2>
            <div className="gradient-cards">
                {
                    countryFacts.map((country) => {
                        const {id, countryName, capital,population,famousSport,interestingFact} = country
                        return(
                            <div className="card" key={id}>
                            <div className="container-card bg-blue-box">
                                <p className="card-title">{countryName}</p>
                                <p>
                                    <span className="card-description">Capital:</span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="card-description">Population:</span>
                                    {population}
                                </p>
                                <p>
                                    <span className="card-description">Famous Sport:</span>
                                    {famousSport}
                                </p>
                                <p>
                                    <span className="card-description">InterestingFact:</span>
                                    {interestingFact}
                                </p>
                            </div>
        
                        </div>
                        )
                    })
                }
               
            </div>
        </section>
    )
}