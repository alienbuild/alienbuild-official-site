import Default from "../Templates/Default"
import Link from "next/link"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {Grid} from "@material-ui/core"
import MatrixRain from "../components/ui/MatrixRain";
import Waves from "../components/ui/Waves"

const Index = () => {

    const useStyles = makeStyles({
    });

    const classes = useStyles();

    const heroCarousel = () => {
        return(
            <Waves children={
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    id={"index-hero"}
                >
                    <section>
                        <Typography variant="subtitle1" component={"small"} className={"lead"}>Exclusive White Label</Typography>
                        <Typography variant="h1">JavaScript</Typography>
                        <Typography variant="subtitle2" component={"small"}>ES6, Express, React, Node, Next</Typography>
                        <MatrixRain />
                    </section>
                </Grid>
            } colour={"#01011D"} inverse={true} overflow={true} />
        )
    }
    return(
        <Default>
            {heroCarousel()}
            <Link href="/signup">Signup</Link>
        </Default>
    )
}

export default Index