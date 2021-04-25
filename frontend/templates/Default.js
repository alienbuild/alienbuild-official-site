import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Default = ({ children, overflowX, Hero, homepage }) => {
    return(
        <>
            <Header Hero={Hero} homepage={homepage} />
            <main className={
                    overflowX ? 'normal' : 'overflow-x-hidden'
                }>{children}</main>
            <Footer />
        </>
    )
}

export default Default;