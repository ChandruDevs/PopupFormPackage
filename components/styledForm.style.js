import styled from 'styled-components';
const StyledForm = styled.div` 

position: absolute;
top: 0;
left: 0;
background: transparent;
width: 100%;
height: 100%;
overflow: scroll;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
overflow:hidden;
font-family:sans-serif;
  .required{
    color:red;
  }
  .form{
    position:relative;
    background:lightblue;
    border-radius:8px;
    display: flex;
    flex-direction: column;
    padding: 4% 8%;
    gap:16px;
    width:max-content;
    height:80%;
    p{
      margin:0px;
    }
  }
  ::-webkit-scrollbar {
    width: 4px;
    height:4px;
  }
  ::-webkit-scrollbar-track {
    background: lightgrey; 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8888; 
  }
  `;
const StyledHeader =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    max-width: 310px;
    h3{
      margin:0px;
      color:darkblue;
    }
`;

const StyledFooter =  styled.div`
  height:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    border-radius: 8px;
    padding: 8px;
    background-color: burlywood;
    border: 2px solid gainsboro;
    font-size: 18px;
    cursor:pointer;
  }
}
`;
const StyledContent =  styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y:auto;
  overflow-x:hidden;
  padding: 10px 24px 10px 10px;
`;
const StyledInput = styled.div`
  display:flex;
  flex-direction:column;
  gap:8px;
  position:relative;
  input,
  input::placeholder {
    font-size: 16px;
  }
  input{
    padding: 10px;
    min-width: 200px;
    max-width: 310px;
    border-radius: 10px;
    border:2px solid darkblue;  
    background:whitesmoke;
  }
  input:focus-visible {
    outline:none;
  }
  label{
    display: flex;
    gap: 4px;
  }
  .required{
    color:red;
  }
  .showPasswordBtn{
    position: absolute;
    top: 39px;
    left: 200px;
    height:20px;
    width:22px;
    cursor:pointer;
    z-index: 1;
    background: whitesmoke;

`;
const StyledLabel= styled.label`
  background-color: #333; 
  color: green;
`;
const StyledDropdown = styled.div`
  background-color: #333; 
  color: green;
`;

const StyledSelect =  styled.div`
display:flex;
flex-direction:column;
gap:8px;
.customizedSelectWrapper{
  min-width: 200px;
  max-width: 329px;
  border: 2px solid darkblue;
  position: relative;
  cursor: pointer;
  background: white;
  border-radius: 8px;
  .showSelected{
    max-width: 290px;
    span{
      margin:5px;
      width:auto;
      background-color:blanchedalmond;
      border: 1px solid blue;
      border-radius: 8px;
      padding: 3px;
    }
  }
  .unSelected {
    margin: 10px;
  }
  span{
    display: inline-block;
    width: 100%;
  }
  .values{
    position: absolute;
    top: calc(100% + 10px);
    left: -4px;
    background: white;
    width: 103%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    border-radius: 8px;
    z-index:11;
    box-sizing: border-box;
    .dropdown-wrapper{
      overflow-y: auto;
      width: 100%;
      max-height: 300px;
    }
    .dropdown-label{
      width:100%;
      cursor:pointer;
      display: flex;
      gap: 4px;
      min-height:30px;
      display:flex;
      align-items:center;
      background-color: inherit;
      box-sizing: border-box;
      input[type=checkbox]{
        height:18px;
        width:18px;
        border-radius: 4px;
        border: 1px solid green;
        appearance: none;
        background-color: #ffffff;
        cursor: pointer;
      }
      input[type=checkbox]:checked {
        background-image: url("/checkbox.png");
        background-size: 100%;
        background-repeat: no-repeat;
        border: 1px solid darkgreen;
      }
      span{
        color:darkgreen;
      }
    }
    .dropdown-label:hover {
      background-color: honeydew;
      border: 1px solid blue;
      border-radius:8px;
    }
    .search{
      display: flex;
      align-items: center;
      width: 100%;
      gap: 8px;
      .clear{
        color:blue;
      }
      input{
        width:${(props) => (props.itemsSelected ? '150px' : '100%')};
        height:20px;
        padding:4px 4px 4px 8px;
        border-radius:8px;
        border: 2px solid green;
      }
      input:focus-visible{
        outline:none
      }
    }
}

`
const StytledLabel = styled.span`
      text-align:justify;
      font-weight: 400;
      font-size: 18px;
      max-width: 329px;
      label{
        display: flex;
        gap: 4px;
      }
    
`
const StyledRadio =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .radio-wrapper{
      display: flex;
      flex-direction: column;
      gap: 4px;
      label{
        display:flex;
        align-items:center;
        cursor:pointer;
        gap:8px;
        input[type=radio]{
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-clip: content-box;
          border: 2px solid rgba(255,252,229,1);
          background-color: rgba(255,252,229,1);
          cursor:pointer;
        }
        input[type="radio"]:checked {
          background-color: green;
          padding: 4px;
          border: 2px solid green;
        }
      }
    }
`
const StyledImport = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
#uploadDiv{
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background: whitesmoke;
    border-radius: 8px
  }
}

  .showPreviewWrapper{
    display:flex;
    flex-direction:column;
    gap:8px;
    .cancelImport{
      height:18px;
      width:18px;
    }

    button{
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid #ccc;
      padding: 6px 12px;
      cursor: pointer;
      background: whitesmoke;
      border-radius: 8px;
      max-width:310px;
      width:fit-content;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;       
      }
    }
  }



.showDocumentPreview{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display:flex;
  flex-direction:column;
  .close{
    height: 40px;
    width: 40px;
    position: absolute;
    z-index: 11;
    right: 0;
    top: 6%;
    cursor:pointer;
  }
}
`
export { 
  StyledForm,
  StyledHeader,
  StyledContent,
  StyledFooter,
  StyledInput,
  StyledSelect,
  StyledDropdown,
  StytledLabel,
  StyledRadio,
  StyledImport
};