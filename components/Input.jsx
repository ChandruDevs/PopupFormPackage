import React, { useState } from 'react';
import { StyledInput,StytledLabel } from "./styledForm.style"
export default function Input({item,FormData,setFormData}) {
    const[showPassowrd,setShowPassword] =  useState(false)
    const showPassword=(e)=>{
        let currentImage = new URL(e.target.src).pathname
        if(currentImage =="/view.png"){
            e.target.src = "/hide.png"
            setShowPassword(false)
        }
        else if (currentImage=="/hide.png"){
            e.target.src = "/view.png"
            setShowPassword(true)
        }
    }
return (
    <StyledInput>
        <label>
            <StytledLabel>{item.label}</StytledLabel>
            {item.required && <span className='required'>*</span>}
        </label>
        <input 
            type={(item.name=="password" && !showPassowrd) ? "password":(item.name=="password" && showPassowrd)?"text":item.name }
            placeholder={item.placeholder}
            onChange={(e)=>{
                let handleFormDate = FormData;
                handleFormDate[item.keyword] = e.currentTarget.value
                setFormData(handleFormDate)
            }}></input>
        {item.name=="password" && <img
            onClick={(e)=>showPassword(e)}
            className="showPasswordBtn" 
            id='showPassowrd' 
            src="/hide.png" 
            alt="sp"/>}
    </StyledInput>
)
}