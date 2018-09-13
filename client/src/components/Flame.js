import React from 'react';
import {Route} from 'react-router-dom';

import Header from './Header';
import LandingPage from './LandingPage';
import Profile from './Profile';
import Carausel from './Carausel';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';

import img from '../assets/img/1920x1080/01.jpg';

class Flame extends React.Component{
    constructor(){
        super();
        this.state = {
            Carausel:img,
        }
    }

    // componentDidMount() {
    //     setInterval(this.changeCarausel, 1000);
    //   }

    changeCarausel = (crl)=>{     
        this.setState({Carausel:crl});
    }

    render(){
        return(
            <div>
                <Header carausel={this.changeCarausel}/>
                <Carausel carausel={this.state.Carausel}/>
                    <Route exact path="/" render={(props)=>( <Profile />)}/>
                    <Route path="/Content1" render={(props)=> <LandingPage />} />
                    <Route path="/Content2" component={Content2} />

                {/* <!-- Back To Top --> */}
                <a href="javascript:void(0);" className="js-back-to-top back-to-top">Top</a>            
            </div>            
        );
    }
}

export default Flame;