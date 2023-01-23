import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Canvas from './components/Canvas.js'

const draw = context => {
  var image = new Image();
  image.src = './assets/c1.png';

  context.drawImage(image,10,50);
  context.fillText("Images won't load", 10, 50);

};

class Page extends React.Component {
  render() {
    return (
      <div className="main_div">
        <div className="center_div">
          <div className ='title_div'>GEESE</div>
          <div className="gallery">
           <Canvas draw={draw}/>
            {/*<img src = './assets/c1.png' id ='canvas_image'></img>*/}
          </div>
          <div className = 'nav_div'>
            <ul className = 'nav_ul'>
              <li><button className="link"> Cowboy Nudes </button></li>
              <li><a href="https://www.youtube.com/@Geeseband" className= "link">Watch</a></li>
              <li><a href="https://www.bandsintown.com/a/342405-geese" className="link" >Tour</a></li>
              <li><a href="https://store.geeseband.com/" className="link" >Merch</a></li>
              <li><button className="link">Newsletter</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
