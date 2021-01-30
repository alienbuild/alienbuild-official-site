import Default from "../Templates/Default"
import Link from "next/link"
import { useEffect, useState } from 'react'
import MatrixRain from "../components/ui/MatrixRain"
import Waves from "../components/ui/Waves"
import {APP_NAME} from "../config";

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
                                <h1 className={`text-4xl sm:text-6xl lg:text-8xl leading-none font-extrabold tracking-tight text-white mt-3 uppercase mb-5 sm:mt-3 sm:mb-3`}>White Label development</h1>
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

    // Agency partners section
    const AgencyPartners = () => (
        <div className={`max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 mt-44 mb-44`}>
            <div className="grid grid-cols-3">
                <section className={`col-span-2`}>
                    <div className="w-20 h-20 rounded-xl mb-0 flex items-center justify-center border border-gray-400">
                        <lord-icon
                            animation="hover"
                            palette="#9CA3AF;#9CA3AF"
                            size={'80px'}
                            params="50"
                            className={`block`}
                            src={`./assets/icons/456-handshake-deal/456-handshake-deal-outline.json`}>
                        </lord-icon>
                    </div>
                    <span className="gradient-text--test mt-3 text-lg font-semibold text-pink-500 uppercase">Here when you need us</span>
                    <h6 className={`text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Your agency partners</h6>
                    <p className="text-pink-500 text-3xl mb-5">
                        It doesn't matter if you're a large enterprise or a sole freelancer, if you need assistance,
                        advice or additional resources, we are here to help you.
                    </p>
                    <div className={`space-y-6 mb-10 text-2xl text-gray-500`}>
                        <p>
                            We have the capability of completely taking over your project from conception to completition, or we can work with you to help you tow your projects across the finish line.
                        </p>
                        <p>
                            Don't delay or hesitate to get in touch with us, we respond quickly and we're a friendly bunch.
                        </p>
                    </div>
                    <a href={"#"} className={`w-full sm:w-auto flex-none bg-blue-600 hover:bg-pink-600 text-white text-lg py-3 px-6 border border-transparent rounded-full focus:outline-none transition-colors duration-200`}>
                        Get in touch
                    </a>
                </section>
            </div>
        </div>
    );

    // Full Cycle Process
    const fullCycle = () =>{
        return(
            <section className={`bg-gray-100 border-t-2 border-fuchsia-600 border-b-2 border-fuchsia-600 pt-44 pb-44`}>
                <div className="container">
                    <div className="text-center">
                        <lord-icon
                            animation="loop"
                            palette="#c4579c;#007bff"
                            target="button"
                            size={'100px'}
                            params={`50`}
                            src={`./assets/icons/212-arrow-1-rounded/212-arrow-1-rounded.json`}>
                        </lord-icon>
                        <h6 className={`text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>The full cycle process</h6>
                        <h3 className={`text-pink-500 text-3xl mb-5`}>AGILE, Waterfall, EXTREME, FDD, SCRUM, LEAN, or anything else we've got you covered.</h3>
                    </div>
                    <div className="mt-20 mb-20 grid grid-cols-2 gap-20 place-items-center">
                        <div className={`mb-10 text-2xl text-gray-500`}>
                            <div className="w-20 h-20 rounded-xl mb-0 flex items-center justify-center border border-gray-400">
                                <lord-icon
                                    animation="hover"
                                    palette="#9CA3AF;#9CA3AF"
                                    size={'80px'}
                                    params="50"
                                    className={`block`}
                                    src={`./assets/icons/423-key/423-key-outline.json`}>
                                </lord-icon>
                            </div>
                            <span className={`gradient-text--test mt-3 text-lg font-semibold text-pink-500 uppercase`}>Greenfield project?</span>
                            <h1 className={`text-3xl sm:text-5xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>
                                Get started with Alienbuild
                            </h1>
                            <div className="space-y-6">
                                <p>
                                    We've worked with quite literally hundreds of agencies, we've seen and experienced a multitude of methodologies and strategies over the years. This has put us in a unique position to get your project off to the best start.
                                </p>
                            </div>
                        </div>
                        <div>

                            <div
                                className="relative md:px-8 lg:px-0 col-start-1 col-span-full lg:col-start-1 xl:col-start-3 xl:col-end-4 row-start-1 row-end-2 xl:row-start-2 xl:row-end-5 self-center pt-8 lg:pt-0">
                                <div className="mx-auto lg:max-w-2xl xl:max-w-none">
                                    <div
                                        className="relative overflow-hidden md:rounded-xl shadow-2xl flex CodeWindow_root__1fMBP Hero_codeWindow__1W0zH bg-light-blue-500 pb-6 md:pb-0">
                                        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                                        <div className="relative w-full flex flex-col">
                                            <div className="flex-none h-11 flex items-center px-4">
                                                <div className="flex space-x-1.5">
                                                    <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                                                    <div className="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                                                    <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                                                </div>
                                            </div>
                                            <div className="relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col">
                                                <div className="hidden md:block absolute inset-y-0 left-0 bg-black bg-opacity-25"></div>
                                                <div className="w-full flex-auto flex min-h-0 overflow-auto">
                                                    <div className="w-full relative flex-auto">
                                                        <img src={`https://fakeimg.pl/1500x860/888/fff`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const fullStack = () => {
        return(
            <section className={`pt-44 pb-44`}>
                <div className="container">
                    <div className="text-center">
                        <lord-icon
                            animation="loop"
                            palette="#c4579c;#007bff"
                            target="button"
                            size={'100px'}
                            params={`50`}
                            src={`./assets/icons/113-atom/113-atom-outline.json`}>
                        </lord-icon>
                        <h6 className={`text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Full stack development</h6>
                        <h3 className={`text-pink-500 text-3xl mb-5`}>HTML5, CSS3, JavaScript, Node, React, Vue, Angular, PHP</h3>
                    </div>

                </div>
            </section>
        )
    }

    return(
        <Default>
            {heroCarousel()}
            {Mockups()}
            {AgencyPartners()}
            {fullCycle()}
            {fullStack()}
            <Link href="/signup">Signup</Link>
        </Default>
    )
}

export default Index