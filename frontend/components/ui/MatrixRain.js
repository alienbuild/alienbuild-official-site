import { useEffect } from 'react'

const MatrixRain = () => {

    useEffect(() => {
        renderRain()
    },[])

    const renderRain = () => {
        const matrixContainer = document.getElementById('matrix-container');
        const canvas1 = document.createElement('canvas')
        const canvasCTX = canvas1.getContext("2d");

        canvas1.height = window.innerHeight;
        canvas1.width = window.innerWidth;

        let symbol = "¼µ¶±¿ÇÐØĦƔƢǄȡȹɊҖӁ‰＠ξζω□∮〓※∏卐√№↑↓→←↘↙Ψ※㊣∑╳々♀♂∞①ㄨ≡╬";

        symbol = symbol.split("");

        const font_size = 10;
        const columns = canvas1.width / font_size;

        let drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        function draw() {

            // set the canvas to a translucent black which fills the whole screen
            canvasCTX.fillStyle = "rgba(1, 1, 27, 0.05)";
            // context.fillRect(x, y, width, height);
            canvasCTX.fillRect(0, 0, canvas1.width, canvas1.height);

            // set the text to dark green
            //canvasCTX.fillStyle = "#ff2e9e";
            canvasCTX.fillStyle = "rgba(245,122,234, 0.6)";
            canvasCTX.font = font_size + "px arial";

            // looping over drops
            for (let i = 0; i < drops.length; i++) {

                // retrieve a random character to print
                const text = symbol[Math.floor(Math.random() * symbol.length)];

                // context.fillText(text, x, y, maxWidth);
                canvasCTX.fillText(text, i * font_size, drops[i] * font_size);

                // sending the drop back to the top randomly after it has crossed the screen
                // adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i] * font_size > canvas1.height && Math.random() > 0.975){
                    drops[i] = 0;
                }

                // incrementing y coordinate
                drops[i] += 1;

            }
        }

        setInterval(draw, 66);

        matrixContainer.append(canvas1)
    }

    return(
        <div id={"matrix-container"}></div>
    )
}

export default MatrixRain