import Waves from "./Waves";
import Link from "next/link"
import {APP_NAME} from "../../config";

const Footer = () => {
    return(
        <footer id="f-primary">
            <Waves
                colour={"#01011D"}
                inverse={false}
                classes={'no-after'}
                children={
                    <div className={`max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44`}>
                        <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-20 px-10 md:px-0">
                            <div className={`md:col-span-3 xl:col-span-2`}>
                                <span className={"alienbuild-plain-logo"}>
                                    <img src={`/assets/images/alienbuild_craft.svg`} width={`50`} className={`inline-block mr-3`} />
                                    {APP_NAME.toLowerCase()}</span>
                                <p className="mt-3">
                                    Providing white label design and development services exclusive to the creative industry.
                                </p>
                                <img src={`/assets/images/trustpilot-logo.svg`} width={`120`} className={`mt-3`} />
                                <svg className={`tp-stars tp-stars--5 mt-3 mb-3`} viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" width={`170`}>
                                    <g className="tp-star">
                                        <path className="tp-star__canvas" fill="#dcdce6"
                                              d="M0 46.330002h46.375586V0H0z"></path>
                                        <path className="tp-star__shape"
                                              d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                                              fill="#FFF"></path>
                                    </g>
                                    <g className="tp-star">
                                        <path className="tp-star__canvas" fill="#dcdce6"
                                              d="M51.24816 46.330002h46.375587V0H51.248161z"></path>
                                        <path className="tp-star__canvas--half" fill="#dcdce6"
                                              d="M51.24816 46.330002h23.187793V0H51.248161z"></path>
                                        <path className="tp-star__shape"
                                              d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z"
                                              fill="#FFF"></path>
                                    </g>
                                    <g className="tp-star">
                                        <path className="tp-star__canvas" fill="#dcdce6"
                                              d="M102.532209 46.330002h46.375586V0h-46.375586z"></path>
                                        <path className="tp-star__canvas--half" fill="#dcdce6"
                                              d="M102.532209 46.330002h23.187793V0h-23.187793z"></path>
                                        <path className="tp-star__shape"
                                              d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z"
                                              fill="#FFF"></path>
                                    </g>
                                    <g className="tp-star">
                                        <path className="tp-star__canvas" fill="#dcdce6"
                                              d="M153.815458 46.330002h46.375586V0h-46.375586z"></path>
                                        <path className="tp-star__canvas--half" fill="#dcdce6"
                                              d="M153.815458 46.330002h23.187793V0h-23.187793z"></path>
                                        <path className="tp-star__shape"
                                              d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                                              fill="#FFF"></path>
                                    </g>
                                    <g className="tp-star">
                                        <path className="tp-star__canvas" fill="#dcdce6"
                                              d="M205.064416 46.330002h46.375587V0h-46.375587z"></path>
                                        <path className="tp-star__canvas--half" fill="#dcdce6"
                                              d="M205.064416 46.330002h23.187793V0h-23.187793z"></path>
                                        <path className="tp-star__shape"
                                              d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                                              fill="#FFF"></path>
                                    </g>
                                </svg>
                                <small className="block font-normal leading-5 text-left">
                                    We're rated <strong className="text-base">"Excellent"</strong> based on
                                    <a
                                        href="https://uk.trustpilot.com/review/alienbuild.uk"
                                        target="_blank"
                                        className="font-sans text-xs text-left text-blue-500 no-underline"
                                    ><strong className="text-base leading-6 ml-1">22 reviews</strong></a>
                                    <lord-icon
                                        animation="auto"
                                        palette="#ffffff;"
                                        size="15px"
                                        src={`./assets/icons/267-like-thumb-up/267-like-thumb-up-solid.json`}
                                        className=""></lord-icon>
                                </small>

                            </div>
                            <div>
                                <h6 className="py-2 mt-0 mb-2 font-sans font-medium text-white">Company</h6>
                                <nav>
                                    <ul>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>About</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>Services</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>Blog</span></a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h6 className="py-2 mt-0 mb-2 font-sans font-medium text-white">Services</h6>
                                <nav>
                                    <ul>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                            <lord-icon
                                                animation="morph"
                                                target="a"
                                                palette="#CCCCCC;#ff2696;"
                                                size={'20px'}
                                                params="20"
                                                src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                            </lord-icon>
                                            <span className={`leading-6 ml-2 text-pink-600`}>Web Development</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                            <lord-icon
                                                animation="morph"
                                                target="a"
                                                palette="#CCCCCC;#ff2696;"
                                                size={'20px'}
                                                params="20"
                                                src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                            </lord-icon>
                                            <span className={`leading-6 ml-2 text-pink-600`}>App Development</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                            <lord-icon
                                                animation="morph"
                                                target="a"
                                                palette="#CCCCCC;#ff2696;"
                                                size={'20px'}
                                                params="20"
                                                src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                            </lord-icon>
                                            <span className={`leading-6 ml-2 text-pink-600`}>Digital Marketing</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                            <lord-icon
                                                animation="morph"
                                                target="a"
                                                palette="#CCCCCC;#ff2696;"
                                                size={'20px'}
                                                params="20"
                                                src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                            </lord-icon>
                                            <span className={`leading-6 ml-2 text-pink-600`}>Ecommerce</span></a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h6 className="py-2 mt-0 mb-2 font-sans font-medium text-white">Channels</h6>
                                <nav>
                                    <ul>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>Resources</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>Careers</span></a></Link>
                                        </li>
                                        <li className={`my-3`}>
                                            <Link href={"/"}><a className={`py-2`}>
                                                <lord-icon
                                                    animation="morph"
                                                    target="a"
                                                    palette="#CCCCCC;#ff2696;"
                                                    size={'20px'}
                                                    params="20"
                                                    src={`./assets/icons/11-link-unlink-morph/11-link-unlink-morph-solid.json`}>
                                                </lord-icon>
                                                <span className={`leading-6 ml-2 text-pink-600`}>Search</span></a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                            <hr className="mt-10 border-gray-600"/>
                            <div className="py-3 px-10 md:px-0 text-center md:text-left">
                                <small className="text-gray-400	segoe">
                                    &copy; 2017-2021
                                    <strong className="ml-1 text-gray-300">Alienbuild Ltd</strong>. All Rights Reserved.
                                </small>
                                <small className="text-gray-400	block segoe">Registered Company Number: <strong className={`text-gray-300`}>10851831</strong> • VAT Number: <strong className={`text-gray-300`}>368786919</strong></small>
                            </div>
                        </div>
                    </div>}
                options={{
                    height: 100,
                    amplitude: 20,
                    speed: 0.20,
                    points: 3
                }} />
        </footer>
    )
}

export default Footer