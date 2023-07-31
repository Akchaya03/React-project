import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Routes,Link,Switch}from 'react-router-dom'
import Home from "./home";
import About from'./About';
import Joinus from'./joinus';

const routing=(
  <Router>
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/a"element={<About/>}/>
        <Route path="/j"element={<Joinus/>}/>

      </Routes>
    </div>
  </Router>

)
ReactDOM.render(routing,document.getElementById('root'));

/*import React,{ Component } from 'react';    
import ReactDOM from 'react-dom';
class App extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {start: "Initial State"};  
      this.changeState = this.changeState.bind(this)  
   }    
   render() {  
      return (  
         <div>  
             <h1>ReactJS component's Lifecycle</h1>  
             <h3>Hello {this.state.start}</h3>  
             <button onClick = {this.changeState}>Click Here!</button>          
         </div>  
      );  
   }  
   componentWillMount() {  
      console.log('Component Will MOUNT!')  
   }  
   componentDidMount() {  
      console.log('Component Did MOUNT!')  
   }  
   changeState(){  
      this.setState({start:"All!!- Its a great reactjs tutorial."});  
   }  
   componentWillReceiveProps(newProps) {      
      console.log('Component Will Recieve Props!')  
   }  
   shouldComponentUpdate(newProps, newState) {  
      return true;  
   }  
   componentWillUpdate(nextProps, nextState) {  
      console.log('Component Will UPDATE!');  
   }  
   componentDidUpdate(prevProps, prevState) {  
      console.log('Component Did UPDATE!')  
   }  
   componentWillUnmount() {  
      console.log('Component Will UNMOUNT!')  
   }  
}  
ReactDOM.render(<App/>,document.getElementById('root'));*/