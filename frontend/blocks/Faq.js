import Image from 'next/image'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser';

const Faq = ({ independent }) => {

    const [faqs, setFaqs] = useState([])
    const [activeAccordion, setActiveAccordion] = useState(1);

    useEffect(() => {
        setFaqs([
            {
                id: 1,
                question: 'What costs are involved? How should I price up a new project for a client?',
                answer: `<p>The UK national average hourly rate for an agency £86ph according to a <a href="#" target="_blank">2017 survey</a>, our studio rate is only £45ph. This often leads to an insane profit margin for our clients and we've often delivered 6 figure websites for under £40k. Our prices and quotes are not biased to how big or small your company is or the value of the application to you or your clients business, we price hourly.</p>
                <p>As we often work with developers, or companies with dev departments, it's fairly easy for the developer to estimate time against a task or project, which you can then use to estimate the cost based on £45ph. However, please note we do also calculate additional time for account management, debugging, amendments and all the other necessities outside of development too.</p>`
            },
            {
                id: 2,
                question: 'Will my client know that Alienbuild was involved in the process?',
                answer: `<p>That choice is completely up to you. Some of our clients prefer to work completely under non-disclosure agreements, others rather we communicate directly with the end client. We're happy to accomodate your needs in any case.</p>`
            },
            {
                id: 3,
                question: 'Do you offer ongoing support?',
                answer: `<p>We can offer service level or maintenance agreements at a separate tailored cost, but typically ongoing support does fall out of scope of the original agreement. Additionally if you didn't want to enter into a service or maintenance agreement we are happy to provide support at the studio rate of £45ph. However, please note that we only have an hourly rate which can make '10 minute changes' here and there add up quickly so try to aggregate all minor tasks into one job.</p>`
            },
            {
                id: 4,
                question: 'Are you able to work on site at my office?',
                answer: `<p>We are more than happy to work on site with you at your office providing that it is accessible to us (ie: UK based) and that the length of duration is longer than one month. In office requirements are charged at a day rate of £500 per day + VAT and subject to availability. In light of new legislation we also need to ensure that this requirement is deemed firmly outside of IR35.</p>`
            }
        ])
    },[])

    const toggleAccordion = (e, id) => {
        e.preventDefault()
        setActiveAccordion(id)
    }

    const FaqAccordion = ({ id, question, answer }) => {
        return(
            <div className={`faq shadow mb-5`}>
                <header className="bg-white rounded-none box-border -mb-px">
                    <button onClick={(e) => toggleAccordion(e, id)} className={`block py-3 px-5 w-full text-left`}>
                        <lord-icon
                            animation="hover"
                            palette="#c4579c;#007bff"
                            target="button"
                            size={'30px'}
                            src={`./assets/icons/424-question-bubble/424-question-bubble-outline.json`}>
                        </lord-icon>
                        <span className="cursor-pointer ml-4 text-gray-900 text-sm segoe font-bold">{question}</span>
                    </button>
                </header>
                <div className={`bg-white py-3 px-5 text-left text-gray-900 space-y-6 question ${activeAccordion === id ? 'show' : ''}`}>{parse(answer)}</div>
            </div>
        )
    }

    return (
        <section className={`bg-gray-100 pb-44 ${independent ? 'pt-44' : 'pt-16'}`}>
            <div className="container">
                <div className="grid grid-cols-3 gap-20 place-items-center">
                    <div>
                        <lord-icon
                            animation="hover"
                            palette="#c4579c;#007bff"
                            target="button"
                            size={'100px'}
                            params={`50`}
                            src={`./assets/icons/424-question-bubble/424-question-bubble-outline.json`}>
                        </lord-icon>
                        <div className="mb-10 text-2xl text-gray-500">
                            <h2 className={`text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Do you have <strong>questions?</strong></h2>
                            <div className="space-y-6">
                                <p>
                                    We're extremely approachable and responsive, if we haven't answered your questions here please don't hesitate to Get in touch
                                </p>
                                <p>
                                    Outsourcing your work requires a tremendous amount of trust and there's only so much we can say to help build that trust, so don't just take us at face value check out some of the feedback we have received on our Trustpilot.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-2`}>
                        <div className="faqs">
                            {faqs && faqs.map((faq, index) => (
                                <FaqAccordion key={index} id={faq.id} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq