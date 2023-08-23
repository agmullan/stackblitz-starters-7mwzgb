import * as React from 'react';
import './style.css';
import Card from './components/card.js'

export default function App() {
  return (
    <div>
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
