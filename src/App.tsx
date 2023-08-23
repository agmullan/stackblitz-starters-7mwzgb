import * as React from 'react';
import './style.css';
import Card from './components/card.js'
import Background from './components/background.js'

export default function App() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})` }}></div>
      <Card content={[
        <div>
          <h1>MANICURES</h1>
          <p>BY ALLIE</p>
          <div className='row'>
            <p className='subtitle'>Greater Boston • Independent Manicurist</p>
          </div>
        </div>
        ]}>
      </Card>
    </div>
  );
}
