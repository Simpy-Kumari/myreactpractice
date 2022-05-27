import React, { useState } from "react";

const UseStateExample =()=>{

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    let emailChangeHandler=(event)=>{
        setEmail(event.target.value);
        // console.log(email);
        console.log(event.target.value);
        
    }
    let pwdChangeHandler=(event)=>{
        
        setPwd(event.target.value);
        // console.log(pwd);
         console.log(event.target.value);
    }

    
    return (
        
        <form>
           Enter Your Email: <input name ="email" type="email" value ={email} onChange={emailChangeHandler}></input><br/><br/>
           Enter Your password:<input name ="pwd" type="password" value ={pwd} onChange={pwdChangeHandler}></input><br/>
           <button>Submit</button>
        </form>
        
    );
}
export default UseStateExample;