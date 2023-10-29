import Form from "./components/Form";

import React from "react";

export function PopUpForm({ formContents, sucessCallBack }) {
  return <Form sucessCallBack={sucessCallBack} formContents={formContents} />;
}

export default PopUpForm; // Export the component as default
