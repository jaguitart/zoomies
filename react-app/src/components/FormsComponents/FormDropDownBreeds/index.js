import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const FormDropdownBreed = ({ type, field, updateValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(dropdown) {
      const res = await fetch(`/api/dropdown/${dropdown}`);
      const resData = await res.json();
      setData(resData[dropdown])
    }
    fetchData(field)
  }, [field, type]);

//RECORDAR: SOLUCIONAR EL PROBLEMA DEL DROPDOWN QUE NO MUESTRA TODO LOS ELEMENTOS DE LA BD

  return (
    <div id="selectdiv">
      {+type === 1 && (
        <Select options={data.filter(breed => +breed.type === 1)} className="colorselector" labelField={field} color='#004383' dropdownHandle={false} placeholder={`Select a ${field}`} searchable={false} valueField='id' onChange={updateValue} />
      )}

      {+type === 2 && (
        <Select options={data.filter(breed => +breed.type === 2).sort()} className="colorselector" labelField={field} color='#004383' dropdownHandle={false} placeholder={`Select a ${field}`} searchable={false} valueField='id' onChange={updateValue} />
      )}
    </div >
  )
}

export default FormDropdownBreed

