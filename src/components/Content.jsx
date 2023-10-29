import React from 'react';
import { StyledContent } from './styledForm.style';
import Input from "./Input";
import Radio from "./Radio"
import MultiSelect from './MultiSelect';
import Import from './Import';

const Content = ({formContents,FormData,setFormData}) => {
    return (
      <StyledContent>
        {formContents.map((item, index) => (
          
          ((item.name === 'input' || item.name === 'email' || item.name === 'password' )&& 
            <Input 
            item={item} 
            FormData = { FormData } 
            setFormData = { setFormData }
            index = {index}/>) ||

          (item.name === 'select' &&
           <MultiSelect 
           item={item} 
           FormData = { FormData } 
           setFormData = { setFormData }
           index = {index}
           />) ||
      
          (item.name === 'radio' && 
          <Radio
            item={item} 
            FormData = { FormData } 
            setFormData = { setFormData }
            index = {index}
          />)||
          (item.name === 'import' && 
          <Import
            item={item} 
            FormData = { FormData } 
            setFormData = { setFormData }
            index = {index}
          />)
        ))}
      </StyledContent>
    );
  };
  
  export default Content;
