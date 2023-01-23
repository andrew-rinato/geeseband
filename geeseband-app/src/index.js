import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery.js'

class Page extends React.Component {

  render() {
    return (
      <div className="main_div">
        <div className="center_div">
          <div className ='title_div'>GEESE</div>
          <div className="gallery">
           <Gallery/>
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
