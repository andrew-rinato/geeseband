import React from 'react';
import PropTypes from 'prop-types'; 
const Canvas = ( {draw} ) => {
  const canvas = React.useRef();
  React.useEffect(() => {                             
    const context = canvas.current.getContext('2d'); 
    draw(context);
  });
  return (
    <canvas
      ref={canvas}
      width="100"
      height="100"
    />
  )
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
};
export default Canvas;