import React from 'react';
import { useState } from "react";
import { StyledForm } from './styledForm.style';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
export default function Form({ formContents,sucessCallBack }) {

  const getAndFormKeyWordsObj = ()=>{
    var keywords = {};
    formContents.map((item)=>{
      keywords[item.keyword]= "";
    })
    return keywords;
  }

  const [FormData,setFormData] = useState(getAndFormKeyWordsObj())
  return (
    <StyledForm>
      <div className='form'>
        <Header/>
        <Content 
          formContents = {formContents}
          FormData = { FormData }
          setFormData = { setFormData }
        />
        <Footer 
        FormData = {FormData}
        sucessCallBack= {sucessCallBack}/>
      </div>
    </StyledForm>
  );
}