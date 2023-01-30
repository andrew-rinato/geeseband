import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery.js'
import {ReactComponent as Twiddle} from './assets/twiddle.svg'

class Page extends React.Component {

  render() {
    return (
      <div className="main_div">
        <div className="gallery">
         <Gallery/>
        </div>
        <div className = 'nav_div'>
          <div className = 'tag_div'>
            <div className ='title_div'>GEESE</div>
            <Twiddle style={{height:'12px', width:'auto'}}/>
              <a href="https://geese.lnk.to/cowboynudes" target="_blank" className= "link"> cowboy nudes </a>
              <a href="https://www.youtube.com/watch?v=LvHsLdYXfaY" target="_blank" className= "link">watch</a>
              <a href="https://www.bandsintown.com/a/342405-geese" target="_blank" className="link" >tour</a>
              <a href="https://store.geeseband.com/" target="_blank" className="link" >merch</a>
              <a href="http://eepurl.com/hkwcxv" target="_blank" className= "link">newsletter</a>

          </div>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
