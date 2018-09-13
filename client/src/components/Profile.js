import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';

//ITS ABOUT CONTENT
class Profile extends React.Component{

    // componentDidMount(){
    //     window.scrollTo(0,0);
    // }

    // componentDidUpdate(){
    //     window.scrollTo(0,0);
    // }

    render(){
        return(
            <div>
                <Content2 />
                <Content3 />
            </div>
        );
    }
}

export default Profile;