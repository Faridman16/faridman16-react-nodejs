import React from 'react';
import {Redirect} from 'react-router-dom';

import Content1 from './Content1';
import img from '../assets/img/clients/01.png';
import img2 from '../assets/img/clients/02.png';
import img3 from '../assets/img/clients/03.png';
import img4 from '../assets/img/clients/04.png';
import img5 from '../assets/img/clients/05.png';
import img6 from '../assets/img/clients/06.png';

class Admin extends React.Component{
    constructor(){
        super()
        this.i = 0;
        this.arrayLogo = [img, img2, img3, img4, img5, img6];
        this.state = {            
            username:'',
            password:'',
            data:{},
            logo:img6,
            isChange:true,
            redirect:false,

        };
    }

    componentDidMount(){
        setInterval(()=>{        
            this.setState({logo:this.arrayLogo[this.i],isChange:false});
            this.i++
            if(this.i==6)this.i=0;
        },2000)
    }

    handleChange = (input, e)=>{
        console.log(e.target);
        console.log(input);
        if(input==1) {this.setState({username:e.target.value})};
        if(input==2) {this.setState({password:e.target.value})};
    }

    handleSubmit = ()=>{
        console.log('Submit Called');
        var data = {"username":this.state.username,"password":this.state.password}       
        console.log(JSON.stringify(data)) ;
        fetch(
            'http://localhost:3001/api/login',
            {method:'POST',  
            headers: {
                'Content-Type': 'application/json'
              }, body:JSON.stringify(data)})
            .then(response => response.json())
            .then(data => this.setState({redirect:true,id_profile:data.id_profile})); 
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.state.redirect);
        //   return <Redirect to='/' />
        }
      }

    render(){
        return(
            <div>
                    {this.renderRedirect()}
                    <img src={this.state.logo} width="100" />
                    {this.state.id_profile}
                    {this.state.redirect}
                    <input type="text" value={this.state.username} onChange={(e)=>{this.handleChange(1, e)}} />
                    <input type="password" value={this.state.password} onChange={(e)=>{this.handleChange(2, e)}} />
                    <input type="submit" value="Login" onClick={this.handleSubmit}/>
            </div>
        );
    }
    
}

export default Admin;