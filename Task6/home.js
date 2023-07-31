import React,{Component}from'react';
import coffee from'./image/coffee.png';
import ReactDOM from 'react-router-dom';
class Home extends Component{
    render(){
        return(
    <div>
        <center>
        <h1>Golden Coffee</h1>
         <img src={coffee} width="200" height="200"></img>
         <h4>Shop with us!</h4>
         </center>
    </div>
        );
    }
}

export default Home;
