import React from 'react';
import React, { Component } from 'react';

const AboutSection = (props) => {
  return (
    <div className="offset-1 col-10 justify-content-center">
      <div className="row m-0">
        <div className="col-xs-12 col-sm-4 w-100">
            <i class="fa fa-id-card"></i>
            <h4>INDEPENDENT</h4>
            <p>
              I'm a fully licensed independent manicurist holding the following
              licenture:
            </p>
            <p>MA State Manicurist Type 3 License</p>
            <p>Bio Sculpture Gel Certification</p>
        </div>

        <div className="col-xs-12 col-sm-4 w-100">
          <i class="fa fa-gem"></i>
          <h4>LUXURY</h4>
          <p>Specializing in luxury gel manicures:</p>
          <p>Bio Sculpture Gel</p>
          <p>Customized treatments</p>
          <p>Sculptured gel manicures</p>
        </div>

        <div className=" col-xs-12 col-sm-4 w-100">
          <i class="fa fa-location-dot"></i>
          <h4>CONVENIENT</h4>
          <p>I offer two options for locations regarding my services:</p>
          <p>Mobile Manicures</p>
          <p>On-Site in Porter Square</p>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
