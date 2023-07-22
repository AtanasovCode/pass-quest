import { useState } from "react";
import styled from "styled-components";

const InputPassword = ({ setPass, }) => {

    const [height, setHeight] = useState();

    const handleChange = (e) => {
        const textarea = e.currentTarget;
        textarea.style.height = '80px';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setHeight(`${textarea.scrollHeight}px`);
    };

    return (
        <Password
            placeholder="Input password"
            onChange={(e) => {
                setPass(e.currentTarget.value);
                handleChange(e)
            }}
        />
    );
}

export default InputPassword;

const Password = styled.textarea`
    resize: none;
    border: 1px solid #fff;
    background-color: transparent;
    outline: none;
    font-size: 22px;
    font-family: monospace;
    color: #fff;
    width: 350px;
    height: ${props => props.height}px;
    padding: 15px;
    border-radius: 12px;
    overflow: hidden;
`;