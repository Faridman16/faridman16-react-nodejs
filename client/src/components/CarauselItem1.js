import React from 'react';
import img from '../assets/img/1920x1080/01.jpg';
import img2 from '../assets/img/1920x1080/02.jpg';

class CarauselItem1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image:img,
        }
    }

    srcFile = ()=>{

    }

    componentDidMount(){
        console.log(this.state.image);  
    }

    componentWillReceiveProps(nextProps) {
        this.setState({image: nextProps.imgProps})
        console.log(this.state.image); 
      }    

    render(){
        return(            
            <div className="item active">
                <object data={this.state.image} type="image/png">
                    <img className="img-responsive" src={this.state.image} alt="Slider Image" id="coverImage"/>
                </object>                
                <div className="container">
                    <div className="carousel-centered">
                        <div className="margin-b-40">
                            <h1 className="carousel-title" >Hi-End Solutions</h1>
                            <p className="color-white">Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
                        </div>
                        <a href="#" className="btn-theme btn-theme-sm btn-white-brd text-uppercase">Details</a>
                    </div>
                </div>
             </div>
        );
    }
}

export default CarauselItem1;