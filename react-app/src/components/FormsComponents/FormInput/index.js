import React from "react";

const FormInput = ({ field, updateValue, placeholder, preselection }) => {

  return (
    <div>
      <label htmlFor={field} />
      <input name={field} type='text' placeholder={placeholder} value={preselection}
        onChange={updateValue} />
    </div>
  )
}

export default FormInput


