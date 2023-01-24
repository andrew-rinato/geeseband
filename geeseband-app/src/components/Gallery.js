import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Images from './ImageArray'
import Frame from '../assets/wooden_frame.png'
var poissonProcess = require('poisson-process');


const Gallery = (props) => {
  const [display, setDisplay] = React.useState(Images[0])

  useEffect(() => {
    const p = poissonProcess.create(5000, function updateImage() {
      var r = Math.floor(Math.random() * 23);
      if (Images[r]) {
        setDisplay(Images[r])
      }
      
    })

    p.start() 
  }, [])

  return (
    <div style={{width:'100%', height:'auto'}}>
      <img className = 'gallery_frame' src = {Frame} />
      <img className = 'gallery_image' style={{width:'100%', height:'auto'}} src = {display} />
    </div>
  )
};

export default Gallery;