import Default from "../templates/Default"
import Link from "next/link"
import MatrixRain from "../components/ui/MatrixRain"
import Waves from "../components/ui/Waves"
import FullCycle from "../blocks/FullCycle"
import AgencyPartners from "../blocks/AgencyPartners"
import FullStack from "../blocks/FullStack"
import {APP_NAME} from "../config"
import TrustedClients from "../blocks/TrustedClients"
import Faq from "../blocks/Faq"

const Index = () => {

    // Init state
    const heroCarousel = () => {
        return(
            <div id={"hero-wrap"}>
            <Waves children={
                    <section id={`index-hero`}>
                        <MatrixRain />
                        <div className={`grid grid-cols-1 place-items-center h-full z-10 relative`}>
                            <div className={`max-w-screen-lg`}>
                                <span className={"alienbuild-logo"}><span>{APP_NAME.toLowerCase()}</span></span>
                                <br/>
                                <h2 className={`gradient-text--test mt-3 text-4xl font-semibold text-pink-500 uppercase`}>Exclusive UK based</h2>
                                <h1 className={`text-4xl sm:text-6xl lg:text-9xl leading-none font-extrabold tracking-tight text-white mt-3 uppercase mb-5 sm:mt-3 sm:mb-3`}>White Label development</h1>
                                <p className={`text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-gray-200`}>
                                    We offer a heavyweight, pull-no-punches white label design and development service.
                                    <br />
                                    We have extensive developer resources ready to deploy at a moments notice to help you meet your deadlines.
                                </p>
                                <a href={"#"} className={`w-full sm:w-auto flex-none bg-pink-600 hover:bg-blue-500 text-white text-lg py-3 px-6 border border-transparent rounded-full focus:outline-none transition-colors duration-200`}>
                                    Get a quote
                                </a>
                            </div>
                        </div>
                    </section>
            } colour={"#01011D"} inverse={true} overflow={true} />
            </div>
        )
    }

    const Mockups = () => {
        return(
            <section id="app-illustrations">
                <div className="tablet-landscape">
                    <img alt="salesforce" src={`https://stripe.com/img/v3/home/app-illustrations/salesforce.svg`} />
                </div>
                <div className="phone-big">
                    <img alt="instacart" src={`https://stripe.com/img/v3/home/app-illustrations/instacart.svg`} />
                </div>
                <div className="phone-small">
                    <img alt="postmates" src={`https://stripe.com/img/v3/home/app-illustrations/postmates.svg`} />
                </div>
                <div className="tablet-portrait">
                    <img alt="asana" src={`https://stripe.com/img/v3/home/app-illustrations/asana.svg`} />
                </div>
            </section>
        )
    };

    return(
        <Default>

            {heroCarousel()}
            <Mockups />
            <AgencyPartners />
            <FullCycle />
            <FullStack />
            <TrustedClients independent={false} />
            <Faq independent={false} />

            <Link href="/signup">Signup</Link>
        </Default>
    )
}

export default Index