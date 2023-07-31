import React,{Component}from'react';
import'./Style.css';
class Task3 extends Component{
    constructor(){
      super();
      this.state={
        data:
        [
          {
            "name" :"KANISHKA:Buddu"
          },
          {
            "name":"KAVYA:Kavzz"
          },
          { 
            "name":"MANUSHRI:Manuss"
          },
  
          {
            "name":"HARINI:Viniger"
          },
          {
            "name":"Kalai:Banana"
          }
        ]
      }
    }
    render(){
      return(
        <div>
          <Fruit/>
          <ul>
            {this.state.data.map((item)=><List data ={item}/>)}
          </ul>
        </div>
      );
    }
  }
  class Fruit extends React.Component{
    render(){
        return(
            <div>
              <h1 style={{color:'orange',textAlign:'center'}}>Welcome to the Buddy club!</h1>
              <h2 className='App'>This is Akzz</h2>
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
      export default Task3;