import Default from "../Templates/Default";
import Link from "next/link";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => (
    <Default>
        <h2>Signup page</h2>
        <SignupComponent />
    </Default>
)

export default Signup