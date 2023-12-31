import React from 'react';
import { StytledLabel,StyledRadio,StyledError} from './styledForm.style'
export default function Radio({item,FormData,setFormData}) {
  const hanldeFormValue =(e)=>{
    const formData = { ...FormData };
    formData[item.keyword] = e.target.value;
    setFormData(formData);
  }
return (
  <StyledRadio>
    <label>
        <StytledLabel>{item.label}</StytledLabel>
        {item.required && <span className='required'>*</span>}
    </label>
    
    <div 
    className='radio-wrapper'
    onChange={(e)=>{hanldeFormValue(e)}}>
    {
    item.options.map((value) => (
      <label key={value}>
        <input type="radio" name={item.keyword} value={value} />
        <p>{value}</p>
      </label>
    ))
    } 
    </div>
    {
      item.required && FormData &&
      FormData[item.keyword].trim().length===0 &&
        <StyledError>This is required</StyledError>
        }
  </StyledRadio>
)}