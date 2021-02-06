import { useEffect, useState } from 'react'
import {Light as SyntaxHighlighter} from "react-syntax-highlighter"
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import CodeWrap from "../components/ui/CodeWrap"
import Image from "next/image"

const FullStack = () => {

    const [tab, setTab] = useState(1)

    const toggleTab = (tab) => {
        setTab(tab)
    }

    return(
        <section className={`pt-44 pb-44`}>
            <div className="container">
                <div className="text-center">
                    <lord-icon
                        animation="loop"
                        palette="#c4579c;#007bff"
                        target="button"
                        size={'150px'}
                        params={`50`}
                        src={`./assets/icons/113-atom/113-atom-outline.json`}>
                    </lord-icon>
                    <h6 className={`text-3xl sm:text-5xl lg:text-9xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>Full stack development</h6>
                    <h3 className={`text-pink-500 text-3xl mb-5`}>HTML5, CSS3, JavaScript, React, Next, Node, PHP, AMP</h3>
                </div>

                <nav className={`my-20`}>
                    <ul className={`grid grid-cols-5 gap-2`}>
                        <li className={`relative`}>
                            <button type={"button"} className={`block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-400`} onClick={() => toggleTab(1)}>
                                <div className={`flex flex-col items-center py-1`}>
                                    <Image
                                        src="/assets/images/tech/javascript.svg"
                                        alt="JavaScript logo"
                                        height={48}
                                        width={48}
                                    />
                                    <h2>JavaScript</h2>
                                </div>
                            </button>
                        </li>
                        <li className={`relative`}>
                            <button type={"button"} className={`block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-400`} onClick={() => toggleTab(2)}>
                                <div className={`flex flex-col items-center py-1`}>
                                    <Image
                                        src="/assets/images/tech/react.svg"
                                        alt="React logo"
                                        height={48}
                                        width={48}
                                    />
                                    <h2>React</h2>
                                </div>
                            </button>
                        </li>
                        <li className={`relative`}>
                            <button type={"button"} className={`block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-400`} onClick={() => toggleTab(3)}>
                                <div className={`flex flex-col items-center py-1`}>
                                    <Image
                                        src="/assets/images/tech/node.svg"
                                        alt="Node logo"
                                        height={48}
                                        width={'auto'}
                                    />
                                    <h2>Node</h2>
                                </div>
                            </button>
                        </li>
                        <li className={`relative`}>
                            <button type={"button"} className={`block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-400`} onClick={() => toggleTab(4)}>
                                <div className={`flex flex-col items-center py-1`}>
                                    <Image
                                        src="/assets/images/tech/mongodb.svg"
                                        alt="MongoDB logo"
                                        height={48}
                                        width={'auto'}
                                    />
                                    <h3>MongoDB</h3>
                                </div>
                            </button>
                        </li>
                        <li className={`relative`}>
                            <button type={"button"} className={`block w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-400`} onClick={() => toggleTab(5)}>
                                <div className={`flex flex-col items-center py-1`}>
                                    <Image
                                        src="/assets/images/tech/php.svg"
                                        alt="PHP logo"
                                        height={48}
                                        width={'auto'}
                                    />
                                    <h3>PHP</h3>
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={`${tab === 1 ? 'block' : 'hidden'} grid grid-cols-2 gap-20`}>
                    <div>
                        <CodeWrap gradientFrom={'from-yellow-300'} gradientTo={'to-yellow-600'}>
                            <SyntaxHighlighter
                                language="javascript"
                                style={dracula}
                                wrapLongLines
                                customStyle={{ background: 'transparent' }}
                                children={`const yourProject = require('yourProject');

const subject = 'JavaScript project';
const message = 'I have a JavaScript project that I need your assistance with, call me back.';

if(yourProject.requirements.javascript) {
    // Get in touch with Alienbuild
    window.open(\`mailto:pr@alienbuild.uk?subject=$\{subject}&body=$\{message}\`);
}`}
                            />
                        </CodeWrap>
                    </div>
                    <div className={`mb-10 text-2xl text-gray-500`}>
                        <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>JavaScript</h2>
                        <ul className={`mb-5`}>
                            <li className={`inline text-sm mr-3 text-black rounded bg-yellow-300 py-1 px-2 font-bold`}>ECMAScript 5</li>
                            <li className={`inline text-sm mr-3 text-black rounded bg-yellow-300 py-1 px-2 font-bold`}>ECMAScript 6</li>
                        </ul>
                        <div className="space-y-6">
                            <p>
                                We've been using JavaScript since the boom and have enough experience to turn out even the most complex JavaScript requirements, whether that be a small feature on an existing project or an entirely JavaScript driven application.
                            </p>
                            <p>
                                As expected we also have familiarity in an array of JavaScript libraries such as jQuery, Next, Three, Tensorflow, Chart and many more.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`${tab === 2 ? 'block' : 'hidden'} grid grid-cols-2 gap-20`}>
                    <div>
                        React stuff
                    </div>
                    <div>React Code</div>
                </div>

                <div className={`${tab === 3 ? 'block' : 'hidden'} grid grid-cols-2 gap-20`}>
                    <div>
                        Node stuff
                    </div>
                    <div>Node Code</div>
                </div>

                <div className={`${tab === 4 ? 'block' : 'hidden'} grid grid-cols-2 gap-20`}>
                    <div>
                        MongoDB stuff
                    </div>
                    <div>MongoDB Code</div>
                </div>

                <div className={`${tab === 5 ? 'block' : 'hidden'} grid grid-cols-2 gap-20`}>
                    <div>
                        PHP stuff
                    </div>
                    <div>PHP Code</div>
                </div>


            </div>
        </section>
    )
}

export default FullStack