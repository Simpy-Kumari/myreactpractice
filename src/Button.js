import React from "react";
import "./Button.css";

const Button = () => {

    const onButtonClick = () => {
        alert ("hello... ")
    }
    return (
        <>
        <button onClick = {onButtonClick}>Click Here To Alert</button>
        <button className="button_color">Mouse hover To Change The Color</button>
        </>
    );

};

export default Button;