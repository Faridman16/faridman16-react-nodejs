import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/img/logo.png';
import img1 from '../assets/img/1920x1080/01.jpg';
import img2 from '../assets/img/1920x1080/02.jpg';

class Header extends React.Component{

    scrollBy(distance, duration) {
        console.log('Schroll Caled');
        var initialY = document.body.scrollTop;
        var y = initialY + distance;
        var baseY = (initialY + y) * 0.5;
        var difference = initialY - baseY;
        var startTime = performance.now();
    
        function step() {
            var normalizedTime = (performance.now() - startTime) / duration;
            if (normalizedTime > 1) normalizedTime = 1;
    
            window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
            if (normalizedTime < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    render(){
        return(
            <header className="header navbar-fixed-top">
            <nav className="navbar" role="navigation">
              <div className="container">
                    <div className="menu-container js_nav-item">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="toggle-icon"></span>
                      </button>

                        <div className="logo">
                          <a className="logo-wrap" href="#body">
                              <img className="logo-img logo-img-main" src={logo} alt="FlameOnePage Logo" />
                              <img className="logo-img logo-img-active" src="/img/logo-dark.png" alt="FlameOnePage Dark Logo" />
                          </a>
                      </div>
                  </div>

                  <div className="collapse navbar-collapse nav-collapse">
                      <div className="menu-container">
                          <ul className="nav navbar-nav navbar-nav-right">
                              <li className="js_nav-item nav-item"><Link className="nav-item-child nav-item-hover" to="/" onClick={()=>{this.scrollBy(250, 800);this.props.carausel(img1);}}>Home</Link></li>
                              <li className="js_nav-item nav-item"><Link className="nav-item-child nav-item-hover"to="/Content1" onClick={()=> this.props.carausel(img2)}>Content 1</Link></li>
                              <li className="js_nav-item nav-item"><Link className="nav-item-child nav-item-hover"to="/Content2">Content 2</Link></li>
                              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#products">Products</a></li>
                              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Credentials</a></li>
                              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#pricing">Pricing</a></li>
                              <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
          </header>           
        );
    }
}

export default Header;