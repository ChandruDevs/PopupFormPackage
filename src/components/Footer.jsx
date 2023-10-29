import React, { useState } from "react";
import { StyledFooter } from "./styledForm.style";
import Snackbar from "./snackBar";

export default function Footer({ formContents, FormData, sucessCallBack }) {
  const [showError, setShowError] = useState(false);

  const getRequiredKeys = () => {
    var keywords = [];
    formContents.map((item) => {
      item.required &&
        keywords.push({
          keyword: item.keyword,
          name: item.name,
          required: item.required,
        });
    });
    return keywords;
  };
  function ClosePopup() {
    document.getElementById("cutomizable-form-component").remove();
  }

  const validateAndCallBack = () => {
    setShowError(false);
    var fieldsName = [];
    getRequiredKeys().map((items) => {
      if (items.required && FormData[items.keyword].trim().length == 0) {
        fieldsName.push(items.name);
      }
    });

    if (fieldsName.length > 0) {
      setShowError({
        isSucess: false,
        message: "Required Fields Need to be Filled",
      });
    } else {
      sucessCallBack(FormData);
      setShowError({ isSucess: true, message: "Sucess" });
      setTimeout(ClosePopup, 1000);
    }
  };
  return (
    <StyledFooter>
      <button onClick={validateAndCallBack}>submit</button>
      {showError && (
        <Snackbar
          callBack={() => setShowError(false)}
          message={showError.message}
          isSucess={showError.isSucess}
        />
      )}
    </StyledFooter>
  );
}
