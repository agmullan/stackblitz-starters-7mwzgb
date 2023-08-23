import * as React from 'react';
import './style.css';
import Card from './components/card.js'
import Background from './components/background.js'
import AboutSection from './components/aboutsection.js'

export default function App() {
  return (
    <div>
    <div>
      <div className='banner'></div>
    <Card content={[
        <div>
          <h1>MANICURES</h1>
          <p>BY ALLIE</p>
          <div className='row'>
            <p/>
            <p className='subtitle'>Greater Boston • Independent Manicurist</p>
          </div>
        </div>
        ]}>
      </Card>
    </div>
    <AboutSection/>
    </div>
  );
}
