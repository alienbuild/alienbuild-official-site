import Default from "../Templates/Default"
import Link from "next/link"
import { useEffect, useState } from 'react'
import MatrixRain from "../components/ui/MatrixRain"
import Waves from "../components/ui/Waves"
import TextTransition, { presets } from "react-text-transition"
import {APP_NAME} from "../config";


const Index = () => {

    // Init state
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            6000 // every 6 seconds
        );
        setLoading(false);
    },[]);

    const TEXTS = [
        "Javascript",
        "Development",
        "Design UI/UX",
        "Consultancy"
    ];

    const heroCarousel = () => {
        return(
            <div id={"hero-wrap"}>
            <Waves children={
                    <section>
                        <MatrixRain />
                        <div style={{ zIndex: 100, position: 'relative', textAlign: 'center' }}>
                            <h1 id={"main-logo-text"}><span>alienbuild</span></h1>
                            {/*<img src={'./assets/images/alienbuild_logo--stacked.svg'} alt={APP_NAME} style={{ width: '150px', textAlign: 'center', margin: 'auto', display: 'block', marginBottom: '20px'}} />*/}
                            {/*<Typography variant="subtitle1" component={"small"} className={"lead"}>Your exclusive White Label partner</Typography>*/}
                            {/*<Typography variant="h1" className={"hero-heading"}>*/}
                            {/*    <TextTransition*/}
                            {/*        text={ TEXTS[index % TEXTS.length] }*/}
                            {/*        inline={true}*/}
                            {/*        className={"textExp"}*/}
                            {/*        noOverflow*/}
                            {/*    />*/}
                            {/*</Typography>*/}
                            {/*<Typography variant="subtitle2" component={"small"}>*/}
                            {/*    We offer a heavyweight, pull-no-punches white label design and development service. <br/>We have extensive developer resources ready to deploy at a moments notice to help you meet your deadlines.*/}
                            {/*</Typography>*/}
                        </div>
                    </section>
            } colour={"#01011D"} inverse={true} overflow={true} />
            </div>
        )
    }

    const Mockups = () => {
        return(
            <section id="app-illustrations">
                <div className="tablet-landscape">
                    <img alt="salesforce" src={`https://stripe.com/img/v3/home/app-illustrations/salesforce.svg`} />
                </div>
                <div className="phone-big">
                    <img alt="instacart" src={`https://stripe.com/img/v3/home/app-illustrations/instacart.svg`} />
                </div>
                <div className="phone-small">
                    <img alt="postmates" src={`https://stripe.com/img/v3/home/app-illustrations/postmates.svg`} />
                </div>
                <div className="tablet-portrait">
                    <img alt="asana" src={`https://stripe.com/img/v3/home/app-illustrations/asana.svg`} />
                </div>
            </section>
        )
    };

    // Agency partners section
    const AgencyPartners = () => (
        <section id={"agency-partners"}>
                    <lord-icon
                        animation="hover"
                        palette="#c4579c;#007bff"
                        size={'100px'}
                        params="50"
                        src={`./assets/icons/456-handshake-deal/456-handshake-deal-outline.json`}>
                    </lord-icon>
                    {/*<Typography component={"span"} variant={"alienText"}>Your agency partners</Typography>*/}
                    {/*<Typography variant="h4" gutterBottom><strong>Your agency partners</strong>, here for you, when you need us</Typography>*/}
                    {/*<Typography className={classes.subtitle1} color={"primary"} paragraph>It doesn't matter if you're a large enterprise or a sole freelancer, if you need assistance, advice or additional resources, we are here to help you.</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    We have the capability of completely taking over your project from conception to completition, or we can work with you to help you tow your projects across the finish line.*/}
                    {/*</Typography>*/}
                    {/*<Typography paragraph>*/}
                    {/*    Don't delay or hesitate to get in touch with us, we respond quickly and we're a friendly bunch.*/}
                    {/*</Typography>*/}
                    {/*<Link href={"/"}><Button variant="contained" color={"primary"}>Get in touch</Button></Link>*/}

        </section>
    );

    return(
        <Default>
            {heroCarousel()}
            {Mockups()}
            {AgencyPartners()}
            <Link href="/signup">Signup</Link>
        </Default>
    )
}

export default Index