import React, { useState } from "react";

const ReactForm = () => {
    const initialValue= {tel:"", url:""};
    const [input, setInput] = useState(initialValue)
    const [errors, setErrors] = useState({})

    const inputHandler = (event) => {
        const {name, value}=event.target
        setInput({...input, [name]:value});

    }

    const submitHandler = (event) => {
        event.preventDefault();
        setErrors(validate(input));

    }
    const validate =(data)=>{
        let errMsg = {}
        const regExpUrl = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const regExpMob = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!data.url){
            errMsg.url= "Url is required";
        }else if(!regExpUrl.test(data.url)){
            errMsg.url ="Invailid url format";
        }

        if(!data.tel){
            errMsg.tel= "Mobile Number is required";
        }else if(!regExpMob.test(data.tel)){
            errMsg.tel = "Please enter vailid mobile number"
        }

        return errMsg;

    }
    return (
        <>
        <form>
        <div>
            <label>Enter Your Mobile Number:</label>
            <input type="tel" name="tel" onChange={inputHandler}></input>
            {errors.tel && <span>{errors.tel}</span>}
        </div><br/>
        <div>
            <label>Add Your HomePage:</label>
            <input type= "url" name="url" onChange={inputHandler}></input>
            {errors.url && <span>{errors.url}</span>}
        </div><br/>
        <button onClick={submitHandler}>Submit</button>
        </form>
           
        </>
    );
}
export default ReactForm;