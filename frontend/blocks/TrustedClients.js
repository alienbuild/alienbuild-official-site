import Image from 'next/image'
import Carousel from 'react-elastic-carousel'
import { useState, useEffect } from 'react'

const TrustedClients = ({ independent }) => {

    const [reviews, setReviews] = useState([])

    const clients = [
        { clientName: 'Argos', asset: '/assets/images/clients/argos.svg' },
        { clientName: 'Sainburys', asset: '/assets/images/clients/sainsburys.svg' },
        { clientName: 'ATOS', asset: '/assets/images/clients/atos.svg' },
        { clientName: 'BGL Group', asset: '/assets/images/clients/bgl-group.svg' },
        { clientName: 'Compare The Market', asset: '/assets/images/clients/compare-the-market.svg' },
        { clientName: 'Karcher', asset: '/assets/images/clients/karcher.svg' },
        { clientName: 'Microsoft', asset: '/assets/images/clients/microsoft.svg' },
        { clientName: 'Mitsubishi', asset: '/assets/images/clients/mitsubishi.svg' },
        { clientName: 'NRS Healthcare', asset: '/assets/images/clients/nrs-healthcare.svg' },
        { clientName: 'O2', asset: '/assets/images/clients/o2.svg' },
        { clientName: 'Sodexo', asset: '/assets/images/clients/sodexo.svg' },
    ]

    useEffect(() => {
        setReviews([
            { title: 'Glad to work with and learn from him', date: '4 Jul 2018', cite: 'Peter Cselik, Argos', review: 'Glad to work with and learn from him. Fast efficient timesaver who dealing with the latest technology instead of following silly obsolete trends. I would recommend his company for anyone.'},
            { title: 'I have worked with Alienbuild on a few…', date:'14 Sept 2018', cite: 'Graeme Thomas, Sodexo', review: 'I have worked with Alienbuild on a few projects. Excellent service, always brilliant at figuring out the bespoke builds I need. Would highly recommend'},
            { title: 'Extremely talented and caring developer', date:'24 Jan 2021', cite: 'Jessica Herbert, Compare the Market', review: 'I have never worked with someone as supportive, driven and caring as Liam. He is professional, incredibly talented and a pleasure to work with. His attention to detail shines through in his quality of work and I hope we can work together again soon!'},
            { title: 'As a well established developer', date: '6 Jan 2021', cite: 'Grant Briston, ATOS', review: 'As a well established developer, I take great care with whom I work with under my personal brand of world-class react and MERN software developments. Liam / Alienbuild were simply outstanding.'},
            { title: 'High attention to detail and positive, friendly attitude', date:'3 Jan 2021', cite: 'Kim Sewell, Jet Design and Marketing', review: 'I have worked with Liam on many digital projects and he has always met each and every milestone and exceeded every expectation we had. Liam (Alienbuild) is committed and enthusiastic about development and really adds a personal touch to the project. It’s a breath of fresh air to work with a developer who gets it right the first time.'},
            { title: 'I was lucky enough to work with Liam…', date: '9 Sept 2019', cite: 'Robert Baile, BGL Group', review: 'I was lucky enough to work with Liam for 6 months on a large UI project. He was easy to communicate with and always helped me out when I needed it (I\'m an apprentice). He has a passion for design and code and enjoys writing quality code in a team environment. I hope to work on another project some time soon.'},
            { title: 'Hardworking', date:'7 Aug 2019', cite: 'Jerome Painter, BGL Group', review: 'Liam is a hardworking individual who is willing put in his own time to further help his work. From Working with Liam he was more than happy to share knowledge and point others to resources.'},
            { title: 'Liam has done a good job on several…', date:'31 Aug 2018', cite: 'Naomi Carson, Fitpro', review: 'Liam has done a good job on several projects I\'ve sent him. He\'s easy to communicate with and always very helpful. Would recommend him to others!'},
        ])
    },[])

    const breakpoints = [
        { width: 450, itemsToShow: 1},
        { width: 550, itemsToShow: 2},
        { width: 1280, itemsToShow: 3},
        { width: 1536, itemsToShow: 4 }
    ]

    const truncate = (str, length) => {
        const ending = '...';
        if (length == null) {
            length = 200;
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
    return(
        <section className={`trustpilot__section bg-gray-100 border-t-2 border-fuchsia-600 ${independent ? 'border-b-2 pb-44' : null} border-fuchsia-600 pt-24 lg:pt-44 `}>
            <div className="container">
                <div className="text-center">
                    <lord-icon
                        animation="loop"
                        palette="#c4579c;#007bff"
                        target="button"
                        size={'150px'}
                        params={`50`}
                        src={`./assets/icons/457-shield-security/457-shield-security-outline.json`}>
                    </lord-icon>
                    <h6 className={`text-3xl sm:text-5xl lg:text-9xl mb-5 leading-none font-extrabold text-gray-900 tracking-tight`}>Trusted.</h6>
                    <h3 className={`text-pink-500 text-3xl mb-5`}>We're trusted by some of the UK's largest companies.</h3>
                </div>

                <div className="text-center segoe">
                    <svg className={`mx-auto tp-stars tp-stars--5 mb-3`} viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" width={`120`}>
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
                    We're rated <strong>"Excellent"</strong> (<strong>4.6</strong> / 5) based on <a href="https://uk.trustpilot.com/review/alienbuild.uk" className={`font-bold border-b border-gray-500`}>22 reviews.</a> Showing our favourite reviews.
                </div>

                <Carousel breakPoints={breakpoints} autoPlaySpeed={3000} itemPadding={[20, 20]} pagination={false}>
                    {reviews && reviews.map((review, index) => (
                        <a href="https://uk.trustpilot.com/review/alienbuild.uk" className={`trustpilot-card block relative shadow bg-white p-3.5`} key={index}>
                            <div className="block tp-stars tp-stars--5 mb-3">
                                <svg viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" width={`100`}>
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
                                <span className="block absolute right-3.5 top-3.5 text-gray-400">{review.date}</span>
                            </div>
                            <span className="block font-bold">{truncate(`${review.title}`, 40)}</span>
                            <blockquote>
                                {truncate(`${review.review}`, 88)}
                                <cite className={`block text-gray-400 mt-2`}>{review.cite}</cite>
                            </blockquote>
                        </a>
                    ))}
                </Carousel>

                <ul className={`flex-wrap md:flex-nowrap flex items-center opacity-70 mt-5`}>
                    {clients && clients.map((client,index) => (
                        <li key={index} className={`md:flex-1 relative mx-3`}>
                            <img key={index} src={`${client.asset}`} alt={`${client.clientName}`} className={`w-40 max-h-12`} />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default TrustedClients