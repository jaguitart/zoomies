import React from "react";

const FormInput = ({ field, updateValue, placeholder, preselection, required, extraclass }) => {

  return (
    <div>
      <label htmlFor={field} />
      <input name={field}
        type={field === 'password' ? 'password' : 'text'}
        className={extraclass}
        placeholder={placeholder}
        value={preselection}
        onChange={updateValue}
        required={required}
      />
    </div>
  )
}

export default FormInput