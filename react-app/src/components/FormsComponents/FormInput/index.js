import React from "react";

const FormInput = ({ field, updateValue, placeholder, preselection, required }) => {

  return (
    <div>
      <label htmlFor={field} />
      <input name={field} type='text' className={field === 'password'?'passwordinput':''} placeholder={placeholder} value={preselection}
        onChange={updateValue} 
        required={required}
        />
    </div>
  )
}

export default FormInput