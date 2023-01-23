import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Images from './ImageArray'
var poissonProcess = require('poisson-process');


const Gallery = (props) => {
  const [display, setDisplay] = React.useState(Images[0])

  useEffect(() => {
    const p = poissonProcess.create(4000, function updateImage() {
      var r = Math.floor(Math.random() * 23);
      setDisplay(Images[r])
    })

    p.start() 
  }, [])

  return (
    <img className = 'gallery_image' style={{width:'100%', height:'auto'}} src = {display} />
  )
};

export default Gallery;