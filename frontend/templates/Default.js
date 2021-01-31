import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Default = ({ children }) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default;