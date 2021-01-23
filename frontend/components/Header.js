import { APP_NAME } from '../config'
import { signout, isAuth } from "../actions/auth"
import NProgress from 'nprogress'
import Link from "next/link"
import Router from "next/router"
import Search from "./blog/Search"

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()


const Header = () => {
    return(
        <header>
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

        </header>
    )
}

export default Header