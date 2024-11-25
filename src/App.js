import React from 'react';
import Header from './components/Header';
import ProfessionalSummary from './components/Summary';
import Education from './components/Education';
import Award from './components/Award';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => (
  <div className="max-w-4xl mx-auto bg-gray-100 shadow-md">
    <Header />
    <ProfessionalSummary />
    <Education />
    <Award />
    <Experience />
    <Skills />
    <Projects />
  </div>
);

export default App;
