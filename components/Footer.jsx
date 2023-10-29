import React from 'react';
import { StyledFooter } from './styledForm.style';
export default function Footer({FormData,sucessCallBack}){
    return(
        <StyledFooter>
            <button onClick={()=>{sucessCallBack(FormData)}}>submit</button>
        </StyledFooter>   )
}