import React, { Component } from 'react'
import Project from './Project'
import Intro from './Intro'
import './App.css';

import h from './img/tab.gif'
import h2 from './img/h.png'
import h3 from './img/h2.png'

class App extends Component {
  render() {
    const pl1 = ['HTML/CSS'];
    const pl2 = ['Sketch  |   Abstract  |   Figma'];
    const pl3 = ['Figma'];


    const projects = [
      {
        company: 'Spectrum, 2019',
        name: 'Motion Design System',
        desc: 'Spearheaded the motion design system at Spectrum during the course of a 10 week internship.',
        url: h,
        progs: pl1,
      },
      {
        company: 'Element, 2019',
        name: 'Cloud Gaming UI Design',
        desc: 'Created initial mockups for a new cloud gaming platform.',
        url: h2,
        progs: pl2,
      },
      {
        company: 'ARTS200, 2019',
        name: 'Pet Adoption App Design',
        desc: 'Worked on designing all screens for an application that would allow pet adopters to find their forever companions.',
        url: h3,
        progs: pl3,
      },
    ]


    return(
      <div className="container">
        <Intro />
        <Project projectData={projects} />
      </div>
    )
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);

export default App
