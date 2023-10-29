import React from "react";
import { ClosePopup, Form } from "./components/Form";
export function PoppForm({ formContents, sucessCallBack }) {
  return (
    <div>
      <Form successCallBack={sucessCallBack} formContents={formContents} />
    </div>
  );
}

export { ClosePopup };
