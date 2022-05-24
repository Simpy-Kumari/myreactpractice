import { useState } from "react";
import DropDownList from "./DropDownList";

export default function MyForm(props) {

    const [inputs, setInputs] = useState({});
    
    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name] : value}))
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputs);
        console.log(typeof(inputs));
    };
    return (
        <form onSubmit={submitHandler}>
            <label>Enter your Name:
                <input type="text" name = "userName" value={inputs.userName || ""} onChange = {changeHandler}/>
            </label><br/>
            <label>Enter your Age:
                <input type="number" name = "age" value={inputs.age || ""} onChange = {changeHandler}/>
            </label><br/>
            <label>Enter your Address:
                <textarea name = "address" placeholder = "write your address" value={inputs.address || ""} onChange = {changeHandler}/>
            </label><br/>
            <DropDownList/>
            <input type="submit"/>
        </form>
    );

}
