import React from "react";
function Greeting(props){
    return <h1>Hello,{props.name} Are you from {props.city}</h1>;
}

function Getgreet(){
    return(
        <div>
            <Greeting name="Fahad"city="Mumbai"/>
            <Greeting name="Saliha"city="Kollam"/>
            <Greeting name="Manan"city="Chennai"/>
            <Greeting name="Alice"city="Netherland"/>
            <Greeting name="Karthik"city="Banglore"/>
        </div>
    );
}
export default Getgreet;