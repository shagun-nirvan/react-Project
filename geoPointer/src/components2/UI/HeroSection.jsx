import { TiArrowRightThick } from "react-icons/ti";

export const HeroSection = () => {
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                    Navigate the Globe, Anytime, Anywhere
                    </h1>
                    <p className="paragraph">Discover the world like never before with a tap. Navigate continents, countries, and cultures, anytime, anywhere—your ultimate global guide is at your fingertips!</p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Explore Now <TiArrowRightThick />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/images/globe.jpg" alt="world globe" className="banner-image"/>
                </div>
            </div>
        </main>

    )
}