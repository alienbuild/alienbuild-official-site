import Image from 'next/image'

import sainsburys from "../public/assets/images/clients/sainsburys.svg";
import o2 from "../public/assets/images/clients/o2.svg";
import comparethemarket from "../public/assets/images/clients/compare-the-market.svg";
import atos from "../public/assets/images/clients/atos.svg";
import argos from "../public/assets/images/clients/argos.svg";
import bglgroup from "../public/assets/images/clients/bgl-group.svg";
import mitsubishi from "../public/assets/images/clients/mitsubishi.svg";
import sodexo from "../public/assets/images/clients/sodexo.svg";
import microsoft from "../public/assets/images/clients/microsoft.svg";
import eagames from "../public/assets/images/clients/eagames.svg";
import apple from "../public/assets/images/clients/apple.svg";
import adidas from "../public/assets/images/clients/adidas.svg";
import altontowers from "../public/assets/images/clients/alton-towers.svg";
import karcher from "../public/assets/images/clients/karcher.svg";

const TrustedClients = () => {
    return(
        <section className={`bg-gray-100 border-t-2 border-fuchsia-600 border-b-2 border-fuchsia-600 pt-44 pb-44`}>
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
                    <h6 className={`text-3xl sm:text-5xl lg:text-9xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Trusted.</h6>
                    <h3 className={`text-pink-500 text-3xl mb-5`}>We're trusted by some of the UK's largest companies.</h3>

                    <ul className={`flex overflow-hidden h-14 my-20 opacity-70`}>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/sainsburys.svg"
                                alt="Sainsburys"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/o2.svg"
                                alt="O2"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/compare-the-market.svg"
                                alt="Compare the Market"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/atos.svg"
                                alt="ATOS"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/argos.svg"
                                alt="Argos"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/bgl-group.svg"
                                alt="BGL Group"
                                layout={'fill'}
                            />
                        </li>
                        <li className={`flex-1 relative`}>
                            <Image
                                src="/assets/images/clients/sodexo.svg"
                                alt="Sodexo"
                                layout={'fill'}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TrustedClients