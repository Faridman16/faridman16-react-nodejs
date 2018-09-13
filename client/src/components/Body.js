import React from 'react';
import Content1 from './Content1';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <Content1 text={this.props.text} changeTitle={this.props.changeTitle} time={this.props.time}/>
            </div>
        );
    }
}

export default Footer;