import { APP_NAME } from '../../config'
import { signout, isAuth } from "../../actions/auth"
import {Grid} from "@material-ui/core"
import NProgress from 'nprogress'
import Link from "next/link"
import Router from "next/router"
import Search from "../blog/Search"
import {makeStyles} from "@material-ui/core/styles"

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../../components/LordIcon'), {
    ssr: false
});

const Header = () => {

    const useStyles = makeStyles({
        header: {
            height: '60px',
            position: 'absolute',
            top: '0',
            left: '0'
        }
    });

    const classes = useStyles();

    return(
        <header id="h-primary" className={classes.header}>
            <Grid
                container
                alignItems="center"
                justify="center"
            >
                <Link href={"/"}><a id={"main-logo"}><img src={'./assets/images/alienbuild_logo--stacked.svg'} alt={APP_NAME}/></a></Link>
                <nav>
                    <ul>
                        <li><Link href={"/"}><a>
                            <lord-icon
                                animation="loop"
                                palette="#ffffff"
                                target="a"
                                size={'20px'}
                                src={`./assets/icons/267-like-thumb-up/267-like-thumb-up-outline.json`}>
                            </lord-icon>
                            Website
                            <strong>Development</strong>
                        </a></Link></li>
                        <li><Link href={"/"}><a>
                            Software
                            <strong>Development</strong>
                        </a></Link></li>
                        <li><Link href={"/"}><a>
                            Ecommerce
                            <strong>Development</strong>
                        </a></Link></li>
                        <li><Link href={"/"}><a>
                            UI/UX
                            <strong>Design</strong>
                        </a></Link></li>
                        <li><Link href={"/"}><a>
                            The Lab
                            <strong>Tutorials</strong>
                        </a></Link></li>
                        <li><Link href={"/"}><a>
                            Contact
                            <strong>Alienbuild</strong>
                        </a></Link></li>
                    </ul>
                </nav>
            </Grid>
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
    )
}

export default Header