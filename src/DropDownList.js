import { useState } from "react";

const DropDownList = () => {

    const [car,setCar] = useState("Select Car")

    const carHandler = (event) =>{
        setCar(event.target.value)
    }
    return(
      
            <select value = {car} onChange={carHandler}>
                <option>Select Car</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="FORD">FORD</option>
            </select>
       
    )
}

export default DropDownList;