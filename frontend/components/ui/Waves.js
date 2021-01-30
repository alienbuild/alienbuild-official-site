import React from 'react';
import Wave from 'react-wavify'

const Waves = ({children, colour, inverse, overflow = false, options = {
    height: 70,
    amplitude: 60,
    speed: 0.15,
    points: 3
}}) => (
    <div className={`wave-container ${inverse ? 'inverse-waves' : null}`} style={{
    }}>
        {children}
        <div className="wave-footer">
            <Wave fill="url(#gradient)"
                  paused={false}
                  options={options}
            >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0"  stopColor="#CB6AA7" />
                        <stop offset="0.5"  stopColor="#007BFF" />
                        <stop offset="1" stopColor={colour} />
                    </linearGradient>
                </defs>
            </Wave>

            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colour} fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,176C384,213,480,235,576,208C672,181,768,107,864,74.7C960,43,1056,53,1152,80C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>*/}
        </div>
    </div>
);

export default Waves;