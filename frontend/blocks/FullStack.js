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

    const javaScriptBlock = () => {
        return(
            <div className={`${tab === 1 ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-20`}>
                <div className={`hidden lg:block`}>
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
        )
    }

    const reactBlock = () => {
        return(
            <div className={`${tab === 2 ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-20`}>
                <div className={`hidden lg:block`}>
                    <CodeWrap gradientFrom={'from-blue-100'} gradientTo={'to-blue-200'}>
                        <SyntaxHighlighter
                            language="javascript"
                            style={dracula}
                            wrapLongLines
                            customStyle={{ background: 'transparent' }}
                            children={`const yourProject = () => {
    const [requirements, setRequirements] = useState({
        react: false
    })
    
    useEffect(() => {
        setRequirements({ react: true })    
    },[])
    
    return(
        <>
            {requirements.react ? (
                <>
                    <button onClick={e => sendEmailTo('pr@alienbuild.uk')}>
                        Get in touch
                    </button>  
                </>
            ): null}
        </>
    )
}

export default yourProject`}
                        />
                    </CodeWrap>
                </div>
                <div className={`mb-10 text-2xl text-gray-500`}>
                    <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>React</h2>
                    <ul className={`mb-5`}>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Router</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Redux</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Next.js</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>GraphQL/Apollo</li>
                    </ul>
                    <div className="space-y-6">
                        <p>
                            Just like most developers we are huge React fans and it has fast become a part of our daily stack over recent years with the growing popularity. We are extremely comfortable working with React to build complex applications for web or mobile. We love to utilise create-react-app or next.js but we are also comfortable with no build configurations.
                        </p>
                        <p>
                            As expected we also have expertise in a lot of packages associated with React such as Redux, react-router-dom and many others.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const nodeBlock = () => {
        return(
            <div className={`${tab === 3 ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-20`}>
                <div className={`hidden lg:block`}>
                    <CodeWrap gradientFrom={'from-green-300'} gradientTo={'to-gray-600'}>
                        <SyntaxHighlighter
                            language="javascript"
                            style={dracula}
                            wrapLongLines
                            customStyle={{ background: 'transparent' }}
                            children={`const nodemailer = require('nodemailer');
const yourProject = require('yourProject');

// Create mail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

// Check requirements                                      
if(yourProject.requires.node) {
    // Get in touch with Alienbuild
    transporter.sendMail({
        from: 'youremail@gmail.com',
        to: 'pr@alienbuild.uk',
        subject: 'Node.js Project',
        text: 'I have a PHP project that I need your assistance with, call me back.'
    }, (err, success) => { if(err){ res.send(err)} else { console.log('Email sent') } );
}`}
                        />
                    </CodeWrap>
                </div>
                <div className={`mb-10 text-2xl text-gray-500`}>
                    <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>Node</h2>
                    <ul className={`mb-5`}>
                        <li className={`inline text-sm mr-3 text-black rounded bg-gray-300 py-1 px-2 font-bold`}>Express</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-gray-300 py-1 px-2 font-bold`}>API</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-gray-300 py-1 px-2 font-bold`}>Socket.io</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-gray-300 py-1 px-2 font-bold`}>GraphQL</li>
                    </ul>
                    <div className="space-y-6">
                        <p>
                            We get extremely excited by Node (<i>..and now Deno</i>) when we get to work with it.
                        </p>
                        <p>
                            We have been using Node, and more specifically Express, for a long time and we have helped to create and deliver numerous types of applications with it, even on unrelated node projects we often find ourselves utilising the power of Node to create microservices to help speed up development processes for an individual project.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const mongoDbBlock = () => {
        return(
            <div className={`${tab === 4 ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-20`}>
                <div className={`hidden lg:block`}>
                    <CodeWrap gradientFrom={'from-green-500'} gradientTo={'to-green-700'}>
                        <SyntaxHighlighter
                            language="javascript"
                            style={dracula}
                            wrapLongLines
                            customStyle={{ background: 'transparent' }}
                            children={`const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const yourProject = db.db('yourProject');
    yourProject.collection('requirements').findOne({ 
        requirement: 'MongoDB'
    }, (err, doc) => {
        if(err) throw err;
        // Get in touch with Alienbuild
        sendEmailTo('pr@alienbuild.uk', 'MongoDB Project', $message);
        db.close();
    });
});`}
                        />
                    </CodeWrap>
                </div>
                <div className={`mb-10 text-2xl text-gray-500`}>
                    <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>MongoDB</h2>
                    <ul className={`mb-5`}>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>JSON</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Query</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Charts</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-blue-300 py-1 px-2 font-bold`}>Robo3T</li>
                    </ul>
                    <div className="space-y-6">
                        <p>
                            We find that MongoDB is a match made in heaven when coupled with Node/Express and React to from the MERN stack. Rapid server and restful api deployment is a freeze and intuitive and whilst we do also love MySQL and have our own expertise in that area, MongoDB is our preferred database for most projects.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const phpBlock = () => {
        return(
            <div className={`${tab === 5 ? 'block' : 'hidden'} grid lg:grid-cols-2 gap-20`}>
                <div className={`hidden lg:block`}>
                    <CodeWrap gradientFrom={'from-indigo-200'} gradientTo={'to-purple-300'}>
                        <SyntaxHighlighter
                            language="javascript"
                            style={dracula}
                            wrapLongLines
                            customStyle={{ background: 'transparent' }}
                            children={`const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const yourProject = db.db('yourProject');
    yourProject.collection('requirements').findOne({ 
        requirement: 'MongoDB'
    }, (err, doc) => {
        if(err) throw err;
        // Get in touch with Alienbuild
        sendEmailTo('pr@alienbuild.uk', 'MongoDB Project', $message);
        db.close();
    });
});`}
                        />
                    </CodeWrap>
                </div>
                <div className={`mb-10 text-2xl text-gray-500`}>
                    <h2 className={`text-3xl sm:text-5xl lg:text-6 xl leading-none font-normal text-gray-900 tracking-tight mb-0`}>PHP</h2>
                    <ul className={`mb-5`}>
                        <li className={`inline text-sm mr-3 text-black rounded bg-indigo-200 py-1 px-2 font-bold`}>Laravel</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-indigo-200 py-1 px-2 font-bold`}>MODX</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-indigo-200 py-1 px-2 font-bold`}>WordPress</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-indigo-200 py-1 px-2 font-bold`}>Magento</li>
                        <li className={`inline text-sm mr-3 text-black rounded bg-indigo-200 py-1 px-2 font-bold`}>MySQL</li>
                    </ul>
                    <div className="space-y-6">
                        <p>
                            In the early web days we specialised in solely PHP and we live and breath PHP based projects. We remain active in developer communities and have been contributing to the MODX Revolution PHP Content Management System for over ten years.
                        </p>
                        <p>
                            If you have a PHP, or even MODX, requirement rest assured we have the capability to see your project or requirements through to completition.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const getUnderlineStyles = () => {
        let leftCalc;
        switch (tab){
            case 1:
                leftCalc = '0%'
                break
            case 2:
                leftCalc = '20%'
                break
            case 3:
                leftCalc = '40%'
                break
            case 4:
                leftCalc = '60%'
                break
            case 5:
                leftCalc = '80%'
                break
            default:
                leftCalc = '0%'
        }
        return { left: leftCalc }
    }

    return(
        <section className={`pt-24 pb-24 lg:pt-44 lg:pb-44`}>
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

                <nav className={`my-20 relative`}>
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
                    <div className="tabs-underline bg-gray-100" style={getUnderlineStyles()}></div>
                </nav>

                {javaScriptBlock()}
                {reactBlock()}
                {nodeBlock()}
                {mongoDbBlock()}
                {phpBlock()}

            </div>
        </section>
    )
}

export default FullStack