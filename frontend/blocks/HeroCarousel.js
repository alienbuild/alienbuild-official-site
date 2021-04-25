import Waves from "../components/ui/Waves";
import MatrixRain from "../components/ui/MatrixRain";
import { useEffect } from 'react'

const HeroCarousel = ({ children, homepage }) => {

    useEffect( () => {
        console.log('homepage prop is: ', homepage)
    }, [])
    return(
        <div id={"hero-wrap"}>
            <Waves children={
                <section id={`index-hero`} className={`${homepage ? 'homepage' : 'generic'}`}>
                    <MatrixRain />
                    {children}
                </section>
            } colour={"#01011D"} inverse={true} overflow={true} />
        </div>
    )
}

export default HeroCarousel