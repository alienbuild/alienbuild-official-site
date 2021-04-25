// Agency partners section
import Button from "../components/ui/Button";

const AgencyPartners = ({ children }) => (
    <section id={`agency-partners`} className={`relative`}>
        {children}
        <div className={`max-w-screen-lg xl:max-w-screen-xl mx-auto space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 mt-44 mb-44`}>
            <div className="px-10 xl:px-0 grid lg:grid-cols-3">
                <section className={`lg:col-span-2`}>
                    <lord-icon
                        animation="hover"
                        palette="#c4579c;#007bff"
                        size={'150px'}
                        params="50"
                        className={`block`}
                        src={`./assets/icons/456-handshake-deal/456-handshake-deal-outline.json`}>
                    </lord-icon>
                    <span className="gradient-text--test mt-0 text-lg font-semibold text-pink-500 uppercase block w-full">Here when you need us</span>
                    <h6 className={`text-3xl sm:text-5xl lg:text-9xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Your agency</h6>
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
    </section>
);

export default AgencyPartners