Certainly! Below is the content for a README file based on the details provided. You can copy this content into a file named `README.md` in your project directory:

````markdown
# Popup Form Component

`popup-form-component` is a React component designed to create a customizable and user-friendly popup form interface. It allows users to create and display forms with ease within their web applications.

## Installation

You can install the `popup-form-component` using npm:

```bash
npm install popup-form-component
```
````

## Usage

To use the `PopUpForm` component within your React application, follow these steps:

1. Import the `PopUpForm` component:

```javascript
import { PopUpForm } from "popup-form-component";
```

2. Implement the `PopUpForm` component in your application:

```javascript
<PopUpForm
  successCallBack={yourSuccessCallBackFunction}
  formContents={yourFormData}
/>
```

## Parameters

### `successCallBack` - Callback Function

- Description: This function is called after a form submission.
- Parameters: `form` (the submitted form data)

### `formContents` - Form Tags Configuration

The `formContents` is an array of objects containing the configuration for form elements to be displayed.

Example Configuration:

```javascript
const formData = [
  {
    name: "input",
    label: "Fullname",
    placeholder: "Enter your name",
    required: false,
    keyword: "name",
  },
  // Add other form elements as required
];
```

## Example Configuration Object

Here is an example of the structure for a form element configuration object:

```javascript
{
  name: "input", // Type of input (e.g., input, email, password, select, radio)
  label: "Label Text", // Display label for the input
  placeholder: "Placeholder Text", // Placeholder text for input (if applicable)
  required: true, // Specify if the field is required
  // Additional properties specific to the input type (e.g., options for select, radio)
  keyword: "uniqueIdentifier", // A unique identifier for the input
  // ... Additional properties based on the input type
}
```

Please customize the `formContents` array according to your form requirements.
