import React, { Component } from 'react';

class Reactforms extends React.Component{
    constructor(){
        super();
        this.state={username:""}
        this.state={age:""}
    }
    uservalue1=(event)=>
    {
        this.setState({username:event.target.value});
       
    }
    uservalue2=(event)=>
    {
        this.setState({age:event.target.value});
    }
    render()
    {
        return(
            <form>
                <h1><i><b>Get in touch</b></i></h1>
                <h1>
                </h1>
                enter your name:<input type="text" name="username" onChange={this.uservalue1}/>
                enter your phone no:<input type="number" name="age" onChange={this.uservalue2}/>
                
            </form>
        )
    }
}

export default Reactforms ;