import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const FormDropdownBreed = ({ type, field, updateValue}) => {
  // const [datacat, setDataCat] = useState([]);
  // const [datadog, setDataDog] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData(dropdown) {
      const res = await fetch(`/api/dropdown/${dropdown}`);
      const resData = await res.json();
        setData(resData[dropdown])

      // if (+type === 1){
      //   setDataDog(resData[dropdown].filter(breed => +breed.type === +type))
      // }else 
      //   setDataCat(resData[dropdown].filter(breed => +breed.type === +type))
    }
    fetchData(field)
  }, [field]);
  
  // console.log(type);
  // console.log(datacat);
  // console.log(datadog);

  return (
    <div id="selectdiv">
      <Select options={data} className="colorselector" labelField={field} color='#004383' dropdownHandle={false} placeholder={`Select a ${field}`} searchable={false} valueField='id' onChange={updateValue} />
    </div >
  )
}

export default FormDropdownBreed

