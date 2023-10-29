import React, { useState } from 'react';
import {StyledImport,StytledLabel} from './styledForm.style'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function Import({item,FormData,setFormData}) {
    const [canShowPreview, setCanShowPreview] = useState(false);
    const [previewDeatils,setPreviewDetails] = useState(false)
    function showPreview() {
        const docs = [
        { 
            uri: previewDeatils.url,
            fileName: previewDeatils.name,
        },
        ];
    
        return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
    }

    const handleImport = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile){
            const filePath = (window.URL || window.webkitURL).createObjectURL(selectedFile);
            setPreviewDetails({url:filePath,name:selectedFile.name});
            let formData = FormData;
            formData[item.keyword] = selectedFile;
            setFormData(formData);
        }
    };

    const cancelImport = (e)=>{
      e.stopPropagation()
      setCanShowPreview(false);
      setPreviewDetails("");
    }
  return (
    <StyledImport>
      <StytledLabel>{item.label}</StytledLabel>
      <div id="uploadDiv">
        
        {!previewDeatils ? 
        <>
            <label 
              className="custom-file-upload" 
              htmlFor="fileInput">
                Upload
            </label>
            <input
              onChange={handleImport}
              type="file"
              id="fileInput"
              accept=".pdf,.docs,.txt, .jpg, .jpeg, .png, .gif"
            />
        </>
        :
        <div 
          className="showPreviewWrapper" 
          onClick={()=>{setCanShowPreview(true);}}
          >
            <button> 
              <p>{previewDeatils.name}</p>
              <img 
                onClick={cancelImport}
                className='cancelImport' 
                src="/close-black.png"/>
            </button>
        </div>
        }
      </div>
      {
        canShowPreview &&
            <div className='showDocumentPreview'>
                <img 
                  className='close'
                  onClick={()=>{setCanShowPreview(false)}}
                  src="/close.png"  />
                {showPreview()}
            </div>
      }
      
    </StyledImport>
  );
}

export default Import;
