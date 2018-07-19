import React from 'react';
import './styles/about.css'
import Navbar from './nav.js';
import about from './about.jpg';

const About = () => (
    <div class="about-wrapper">
  <div class="col1">
    <h1>About</h1>
    <Navbar className="menu-about" color="black"/>
  </div>
  <div class="col2">
    <img src={about} alt=""/>
    <h2>I am Shayan Mustafa</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam quam, tincidunt non diam sed, tincidunt placerat dui.
        Sed eu nisi sed lacus volutpat auctor. Nam ultricies, mi quis mollis imperdiet, enim leo fringilla mi, quis ultricies risus odio sed risus.
        Quisque sem dolor, ultricies at massa eget, feugiat consequat lacus. Quisque vel suscipit tellus.
        Pellentesque tempus quis risus in finibus. Vestibulum porttitor elit id diam porta, quis vestibulum ex venenatis.
        Suspendisse potenti. Nullam pretium ligula id libero iaculis convallis. Mauris blandit id libero vitae porta.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum, nunc vel consequat laoreet, mi urna dignissim justo, ac dictum dui velit et lacus.
        Duis quis ex nec felis fringilla commodo.</p>
  </div>
</div>
)

export default About;