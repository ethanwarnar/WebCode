import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Content from './components/Content/Content.js';

export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Content />
      </ParallaxProvider>
    );
  }
}
