import { useState } from 'react'
import { APP_NAME } from '../../config'
import { signout, isAuth } from "../../actions/auth"
import NProgress from 'nprogress'
import Link from "next/link"
import Router from "next/router"
import Search from "../blog/Search"

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

import dynamic from 'next/dynamic';
import HeroCarousel from "../../blocks/HeroCarousel";
const DynamicLordIcon = dynamic(() => import('../../components/LordIcon'), {
    ssr: false
});

const Header = ({ Hero, homepage }) => {

    const [navActive, setNavActive] = useState(false)

    return(
        <>
            <header id="h-primary" >
                <div className={`ticker-bar grid grid-cols-2`}>
                    <Link href={`/`}>
                        <a className="alienbuild-h-logo">{APP_NAME.toLowerCase()}</a>
                    </Link>
                    <button className={`toggle-mobile-menu`} onClick={e => setNavActive(!navActive)}>X</button>
                </div>
                <DynamicLordIcon />
                <div className="container">
                    <nav id={`n-primary`} className={`${navActive ? 'active' : 'inactive'}`}>
                        <ul className={`grid grid-cols-2 gap-4 sm:gap-y-0 sm:grid-cols-6`}>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696;"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/489-rocket-space/489-rocket-space-outline.json`}>
                                </lord-icon>
                                <strong>Website</strong>
                                Development
                            </a></Link></li>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696;"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/113-atom/113-atom-outline.json`}>
                                </lord-icon>
                                <strong>Software</strong>
                                Development
                            </a></Link></li>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696;"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/139-basket/139-basket-outline.json`}>
                                </lord-icon>
                                <strong>Ecommerce</strong>
                                Development
                            </a></Link></li>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696;"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/117-vector-design-pen/117-vector-design-pen-outline.json`}>
                                </lord-icon>
                                <strong>UI/UX</strong>
                                Design
                            </a></Link></li>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/439-lab-bottle-triangle/439-lab-bottle-triangle-outline.json`}>
                                </lord-icon>
                                <strong>The Lab</strong>
                                Tutorials
                            </a></Link></li>
                            <li><Link href={"/"}><a>
                                <lord-icon
                                    animation="loop"
                                    target="a"
                                    palette="#CCCCCC;#ff2696;"
                                    size={'50px'}
                                    params="50"
                                    src={`./assets/icons/140-earphone-telephone/140-earphone-telephone-outline.json`}>
                                </lord-icon>
                                <strong>Contact</strong>
                                Alienbuild
                            </a></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="hide">
                    Brand name: <Link href={"/"}>{APP_NAME}</Link>
                    <br/>
                    <Search />
                    <br/>

                    <Link href={"/blogs"}>Blogs</Link>

                    {/*If user is not logged in*/}
                    { !isAuth() && (
                        <>
                            <Link href={"/signin"}>Signin</Link>
                            <Link href={"/signup"}>Signup</Link>
                        </>
                    ) }

                    {/*Logged in and not admin*/}
                    { isAuth() && isAuth().role === 0 && (<Link href={"/user"}>Dashboard</Link>)}
                    {/*Logged in and is admin*/}
                    { isAuth() && isAuth().role === 1 && (<Link href={"/admin"}>Admin</Link>)}

                    {/* If user is logged in*/}
                    { isAuth() && (
                        <button onClick={() => signout(() => Router.replace('/signin'))}>Signout</button>
                    )}
                </div>
            </header>
            <HeroCarousel homepage={homepage}>{Hero}</HeroCarousel>
        </>
    )
}

export default Header