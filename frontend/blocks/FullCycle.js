const FullCycle = () =>{
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
                        src={`./assets/icons/212-arrow-1-rounded/212-arrow-1-rounded.json`}>
                    </lord-icon>
                    <h6 className={`text-3xl sm:text-5xl lg:text-9xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>The full cycle process</h6>
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
                        <h1 className={`text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8`}>
                            Start with us.
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

export default FullCycle