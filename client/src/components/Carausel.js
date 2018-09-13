import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CarauselItem1 from './CarauselItem1';
import CarauselItem2 from './CarauselItem2';

class Carausel extends React.Component{

    render(){
        return(
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <div className="container">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    </ol>
                </div>

                <div className="carousel-inner" role="listbox">        
                    <CarauselItem1 imgProps={this.props.carausel}/>
                </div>
            </div>
        );
    }
}

export default Carausel;