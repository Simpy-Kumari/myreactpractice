import { useState } from "react";

const UseStateExamp2 = () => {
  const [input, setInput] = useState({
    email: "",
    pwd: ""
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  return (
    <form>
      Enter Your Email:
      <input name="email" type="email" onChange={inputHandler} />
      Enter Your password:
      <input name="pwd" type="password" onChange={inputHandler} />
      <button>Submit</button>
    </form>
  );
};
export default UseStateExamp2;
