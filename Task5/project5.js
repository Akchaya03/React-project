/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Registrationform extends React.Component{
    constructor(){
        super();
        this.state={username:"",phnno:null,errmsg:""};
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="phnno"){
            if(v!=""&&!Number(v))
            {
                err=<strong>invalid,age must be number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
   
    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("Successfully Registered!!");
    }
    render(){
        return(
            <form>
                <center><h1>Sports Registration form</h1></center>
                <h4>Select sport:<select name="sports" id="sports">
                <option value="opt">Select An Option</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Tennis">Tennis</option>
                </select></h4>
               <h4> Name:<input type="text" name="username" /><br></br></h4>
               <h4>Phone No:<input type="text" name="Phnno" /><br></br></h4>
                {this.state.errmsg}
                <h4> Address:<input type="text" name="Address"/><br></br></h4>
                <h4>Fees:</h4>
              <button type='submit' name="submit" onClick={this.formsubmit}>submit</button> 
            </form>
        )
    }
}
ReactDOM.render(<Registrationform/>,document.getElementById('root'));
export default Registrationform ;*/

import React from 'react';
import BM from './image/BadMinton.jfif';
import Tennis from './image/Tennis.jpg';
import Cricket from './image/Cricket.jfif';
class App extends React.Component{
  constructor(){
    super();
    this.state= {sport:"",name:"",phno:null,add:"",fees:null,refer:null,amount:null,errmsg:"",imgscr:""};
  }
  uservalue=(event)=> {
    let n=event.target.name;
    let v=event.target.value;
    let err=" ";
    if(n==="phno"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg1:err});
    }
    if(n==="fees"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg2:err});
    }
    if(n==="refer"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
        this.setState({errmsg3:err});
      }else{
        this.setState({errmsg3:""});
      var r = document.getElementById("Refer").value;
      var f = document.getElementById("Fees").value;
      var t = r*f;
      document.getElementById("Total").value=t;  
      }
    }
    if(n==="sport") {
      if(v==="Tennis"){
        let a = Tennis;
        this.setState({imgscr:a});
      }
      if(v==="BatMinton"){
        let a = BM;
        this.setState({imgscr:a});
      }
      if(v==="Cricket"){
        let a = Cricket;
        this.setState({imgscr:a});
      }
    }
  }
  formSubmit=(event)=> {  
    event.preventDefault();
    alert("Registration is Success");
  }                                                                                            
  render(){
    return(
      <div>
        <img src={this.imgscr} alt='Sport'/>
      <form onSubmit={this.formSubmit}>
        <h1>Sports registration </h1>

        Select Sport: <select id='image-select' name='sport' onClick={this.uservalue}>
          <option value={0}>Select option</option>
          <option value={"Tennis"}>Tennis</option>
          <option value={"BatMinton"}>Bat Minton</option>
          <option value={"Cricket"}>Cricket</option>
        </select>
        <br /><br />

        Name: <input type="text" name="username" onChange={this.uservalue} /> <br /><br />

        Phone : <input type="text" name="phno" onChange={this.uservalue}/>
        {this.state.errmsg1}<br /><br />

        Address : <input type="text" name="add" onChange={this.uservalue}/><br /><br />

        Fees : <input type="text" id='Fees' name="fees" onChange={this.uservalue}/>
        {this.state.errmsg2}<br /><br />

        References : <input type="text" id="Refer" name="refer" onChange={this.uservalue}/>
        {this.state.errmsg3}<br /><br />

        Total amount :<input type='text' id='Total' disabled /><br />

        <input type='submit' />
      </form>
      </div>
    );
  }
}
export default App;
