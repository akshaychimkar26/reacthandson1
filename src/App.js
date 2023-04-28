import React, { Component } from "react";
import Myfirstfunctionalcomponent from './Components/Myfirstfunctionalcomponent'
import Myclasscomponent from "./Components/Myclasscomponent";
import "./Components/mystyle.css";

export class App extends Component{
  constructor(props){
    super(props);
    this.state={
      showfunctionalcomponent:true,
      showclasscomponent:true,
    };
  }
  togglefuncomp=()=>{
    this.setState((prevState)=>({
      showfunctionalcomponent:!prevState.showfunctionalcomponent,
    }));
  };
  toggleclasscomp=()=>{
    this.setState((prevState)=>({
      showclasscomponent:!prevState.showclasscomponent,
    }));
  };

  render(){
    return (
      <div className="App">
        <h2 className="heading">Styling using Functional and Class Component</h2>
        <div className="flex">
          <button onClick={this.togglefuncomp} className="button1">To see styling in functional component</button>
          <button onClick={this.toggleclasscomp} className="button2">To see styling in class component</button>
          {this.state.showfunctionalcomponent && <Myfirstfunctionalcomponent />}
          {this.state.showclasscomponent && <Myclasscomponent/>}
        </div>
      </div>
      );
    }
  }
    export default App;
  

  
