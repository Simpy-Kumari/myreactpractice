import './Button.css';
import styled from 'styled-components';

function Button() {

    const btnStyle = {
        backgroundColor: 'purple',
        color: "white",
        fontWeight: 'bold',
    }
    const Div = styled.h4`
        display: inline-block;
        border-radius: 3px;
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        background: yellow;
        color: red;
        border: 2px solid green;
    `
    const ToDo = styled.button`
    background-color: pink;
    color:white;
    font-weight:bolder;
    `
    return (
        <>

            <button className='btn-color'>Click Me!</button>

            <button style={btnStyle}>Click Me!</button>
            <button style={{ backgroundColor: 'red', color: 'yellow', fontWeight: 'bold' }}>Click Me..</button>
            <ToDo>Click Me!</ToDo>
            <br />
            <Div>This is styled component</Div>
        </>
    );
}
export default Button;
