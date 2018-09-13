import React from 'react';
import img from '../assets/img/1920x1080/02.jpg';

class CarauselItem1 extends React.Component{
    render(){
        return(
            <div className="item">
                <img className="img-responsive" src={img} alt="Slider Image" />
                <div className="container">
                    <div className="carousel-centered">
                        <div className="margin-b-40">
                            <h2 className="carousel-title">Personal Approach</h2>
                            <p className="color-white">Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
                        </div>
                        <a href="#" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">Take a Tour</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarauselItem1;