import React, { useState } from "react";
import { StyledInput, StytledLabel, StyledError } from "./styledForm.style";
export default function Input({ item, FormData, setFormData }) {
  const [showPassowrd, setShowPassword] = useState(false);
  const showPassword = (e) => {
    let currentImage = new URL(e.target.src).pathname;
    if (currentImage == "/view.png") {
      e.target.src = "/hide.png";
      setShowPassword(false);
    } else if (currentImage == "/hide.png") {
      e.target.src = "/view.png";
      setShowPassword(true);
    }
  };
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  return (
    <StyledInput>
      <label>
        <StytledLabel>{item.label}</StytledLabel>
        {item.required && <span className="required">*</span>}
      </label>
      <input
        type={
          item.name == "password" && !showPassowrd
            ? "password"
            : item.name == "password" && showPassowrd
            ? "text"
            : item.name
        }
        placeholder={item.placeholder}
        onChange={(e) => {
          const updatedFormData = { ...FormData };
          updatedFormData[item.keyword] = e.currentTarget.value;
          if (item.name == "email" && validateEmail(e.currentTarget.value)) {
            e.currentTarget.classList.remove("showError");
            setFormData(updatedFormData);
          } else if (item.name !== "email") {
            setFormData(updatedFormData);
          } else {
            e.currentTarget.classList.add("showError");
            updatedFormData[item.keyword] = "";
            setFormData(updatedFormData);
          }
        }}
      ></input>
      {item.required &&
        FormData &&
        FormData[item.keyword].trim().length === 0 && (
          <StyledError>This is required</StyledError>
        )}
      {item.name == "password" && (
        <img
          onClick={(e) => showPassword(e)}
          className="showPasswordBtn"
          id="showPassowrd"
          src="/hide.png"
          alt="sp"
        />
      )}
    </StyledInput>
  );
}
