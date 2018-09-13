import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';

//ITS ABOUT CONTENT
class LandingPage extends React.Component{

    // componentDidMount(){
    //     window.scrollTo(0,0);
    // }

    // componentDidUpdate(){
    //     window.scrollTo(0,0);
    // }

    render(){
        return(
            <div>
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
                <Content5 />
            </div>
        );
    }
}

export default LandingPage;