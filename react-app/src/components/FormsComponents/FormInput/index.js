import React from "react";

const FormInput = ({ field, updateValue, placeholder, preselection, required, extraclass }) => {

  return (
    <div>
      <label htmlFor={field} />
      <input name={field} type='text' className={field === 'password'?'passwordinput':'', extraclass} placeholder={placeholder} value={preselection}
        onChange={updateValue} 
        required={required}
        />
    </div>
  )
}

export default FormInput