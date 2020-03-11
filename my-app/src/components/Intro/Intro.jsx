import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Intro.scss';


const copy = 'Ethan Warnar'.split('');

const Intro = () => (
    <div className="root">
        <div className="bar" />
        <span className="copy">
            {copy.map((letter, i) => (
                <Parallax
                    key={`copy-${i}`}
                    className="letter h1"
                    x={[0 + 'px', ((i - 5) * 60) + 'px']}
                >
                    {letter}
                </Parallax>
            ))}
        </span>
        <div className="bar" />
    </div>
);

export default Intro;