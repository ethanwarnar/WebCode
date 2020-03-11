
import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import About from '../About/About';

import './Content.scss';

export default class Content extends Component {

    render() {
        return (
            <div className="blah">
                <Intro />
                <About />
            </div>
        );
    }

}