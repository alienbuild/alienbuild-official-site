import { APP_NAME } from '../config'
import { signout, isAuth } from "../actions/auth";
import Link from "next/link";
import Router from "next/router";

const Header = () => {
    return(
        <header>
            Brand name: {APP_NAME}
            {/*If user is not logged in*/}
            { !isAuth() && (
                <>
                    <Link href={"/signin"}>Signin</Link>
                    <Link href={"/signup"}>Signup</Link>
                </>
            ) }
            {/* If user is logged in*/}
            { isAuth() && (
                <button onClick={() => signout(() => Router.replace('/signin'))}>Signout</button>
            )}
        </header>
    )
}

export default Header