import React from "react";

const FormImageAWS = ({ field, updateValue, extraclass, required }) => {

  return (
    <div>
      <input
        id={extraclass}
        name={field}
        type='file'
        accept="image/*"
        onChange={updateValue}
        required={required}
        style={{ content: 'OK' }}
      />
    </div>
  )
}

export default FormImageAWS