import * as React from 'react';
import './style.css';
import Card from './components/card.js';
import Background from './components/background.js';
import AboutSection from './components/aboutsection.js';
import SideNav from './components/sidenav.js'

export default function App() {
  return (
    <div>
      <div>
        <div className="banner"></div>
        <div className="row">
          <div className="offset-4 col-4">
            <Card
              content={[
                <div>
                  <h1>MANICURES</h1>
                  <p>BY ALLIE</p>
                  <div className="row m-0">
                    <p />
                    <p className="subtitle">
                      Greater Boston • Independent Manicurist
                    </p>
                  </div>
                </div>,
              ]}
            ></Card>
          </div>
        </div>
      </div>
      <div className='content'>
        <AboutSection />
        <div className='section-space'> </div>
        <SideNav/>
      </div>
    </div>
  );
}
