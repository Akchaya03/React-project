import React,{Component}from'react';
import'./Style.css';
import styles from './Demo.module.css';
import winnie from'./image/winnie.jpg';
import MickeyMouse from'./image/MickeyMouse.jpg'
import cinderella from './image/cinderella.jfif'
class Fruit extends React.Component{
  render(){
    const left={
      padding:'20px 20px 20px 20px'
    };
    const right={
      padding:'40px 50px 20px 770px'
    };
    const mid={
      padding:'40px 50px 30px 550px'
    };
    return(
      <div>
        <h1 style={{color:'orange',textAlign:'center'}}>Welcome to disney world!</h1>
        <h2 className='App'>This is Akzz</h2>
        <h3 className={styles.heading}>Disney World</h3>
        <img src={winnie} width="200" height="200" style={left}></img>
        <img src={cinderella} width="200" height="200"style={right}></img>
        <video width="200" height="200" style={mid} controls>
          <source src="./disney World.mp4" type="video/mp4"></source>
        </video>
        <h1 style={mid}>play the video</h1>
        <img src={MickeyMouse} width="200" height="200" style={left}></img>
        <img src={MickeyMouse} width="200" height="200" style={right}></img>
      </div>
    );
  }
}
class List extends React.Component{
  render(){
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    )
  }
}
export default App1;
