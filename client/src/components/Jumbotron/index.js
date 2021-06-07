import React from "react";
import "./style.css"
function Jumbotron ({children}){
    const background = "./assets/google.png"
    return (
        <div style={{backgroundImage: "url(" + background + ")" }} className="jumbotron border">
            {children}
        </div>
    )
}

export default Jumbotron