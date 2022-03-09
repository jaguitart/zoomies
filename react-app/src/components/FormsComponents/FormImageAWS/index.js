import React from "react";

const FormImageAWS = ({ field, updateValue, preselection }) => {

  return (
    <div>
      <label htmlFor={field} />
      <input
        name={field}
        type='file'
        accept="image/*"
        onChange={updateValue}
      />
    </div>
  )
}

export default FormImageAWS