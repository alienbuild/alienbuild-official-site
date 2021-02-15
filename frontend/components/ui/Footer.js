import Waves from "./Waves";


const Footer = () => {
    return(
        <Waves
            colour={"#01011D"}
            inverse={false}
            classes={'no-after'}
            children={
               <footer>
                   Footer yo.
               </footer>}
            options={{
                height: 100,
                amplitude: 20,
                speed: 0.20,
                points: 3
        }} />
    )
}

export default Footer