import React, { useState, useEffect } from "react";
import { StyledSnackBar } from "./styledForm.style";
const Snackbar = ({ message, callBack, isSucess }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
        callBack();
      }, 3000);
    }
  }, [isVisible]);

  return (
    <StyledSnackBar>
      <div
        id="snackbar"
        className={`${isVisible ? "show" : ""} ${isSucess ? "showGreen" : ""}`}
      >
        {message}
      </div>
    </StyledSnackBar>
  );
};

export default Snackbar;
