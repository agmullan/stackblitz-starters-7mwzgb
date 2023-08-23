import * as React from 'react';
import './style.css';
import Card from './components/card.js';
import Background from './components/background.js';
import AboutSection from './components/aboutsection.js';
import SideNav from './components/sidenav.js';
import SideNavContent from './components/sidenavcontent.js';
import sideNavContentStrings from './constants/constants.js'

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
      <div className="content">
        <AboutSection />
        <div className="section-space"> </div>
        <div className="row m-0">
          <div className='col-4'><SideNav /></div>
          <div className='col-8'><SideNavContent /></div>
        </div>

        <div className="section-space"> </div>
      </div>
    </div>
  );
}
