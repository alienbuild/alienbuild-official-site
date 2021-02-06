import Image from 'next/image'

const Faq = ({ independent }) => {
    return (
        <section className={`bg-gray-100 pb-44 ${independent ? 'pt-44' : null}`}>
            <div className="container">
                <div className="grid grid-cols-3 gap-20">
                    <div>
                        <lord-icon
                            animation="hover"
                            palette="#c4579c;#007bff"
                            target="button"
                            size={'100px'}
                            params={`50`}
                            src={`./assets/icons/424-question-bubble/424-question-bubble-outline.json`}>
                        </lord-icon>
                        <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>Do you have <strong>questions?</strong></h2>
                        <p>
                            We're extremely approachable and responsive, if we haven't answered your questions here please don't hesitate to Get in touch
                        </p>
                        <p>
                            Outsourcing your work required a tremendous amount of trust and there's only so much we can say to help build that trust, so don't just take us at face value check out some of the feedback we have received on our Trustpilot.
                        </p>
                    </div>
                    <div className={`col-span-2`}>2</div>
                </div>
            </div>
        </section>
    )
}

export default Faq