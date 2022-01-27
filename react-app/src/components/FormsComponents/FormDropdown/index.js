import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const FormDropdown = ({ field, updateValue}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(dropdown) {
      const res = await fetch(`/api/dropdown/${dropdown}`);
      const resData = await res.json();
      setData(resData[dropdown])
    }
    fetchData(field)
  }, [field]);
  

  return (
    <div id="selectdiv">
      <Select options={data} className="colorselector" labelField={field} color='#004383' dropdownHandle={false} placeholder={`Select a ${field}`} searchable={false} valueField='id' onChange={updateValue} />
    </div >
  )
}

export default FormDropdown


