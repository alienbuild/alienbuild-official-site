import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const LordIcon = () => <lord-icon animation="hover" src="https://cdn.jsdelivr.net/gh/tomwilusz/lord-icon-element/examples/icons/13-pizza-solid.json" />
export default LordIcon