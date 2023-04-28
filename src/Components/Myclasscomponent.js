import React, { Component } from "react";

class classcompo extends Component{
    render(){
        return <div className="show2"><h2>This is created using class Component</h2>
        <p> This is done using external CSS </p><p style={{color:"blue"}}>This is done using inline CSS</p></div>
    }
}
export default classcompo;