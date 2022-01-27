import React, { useEffect, useState } from "react";
import '../../auth/form.css'

const FormDoubleButton = ({ field, updateValue, clicked }) => {
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
    <div id='doublebutton'>
      <button key={data[0]?.id} value={1} className={clicked === 1 ? 'user' : ''} id='doublebuttonleft' name={field} onClick={updateValue}>{data[0]?.[field]}</button>
      <button key={data[1]?.id} value={2} className={clicked === 2 ? 'org' : ''} id='doublebuttonright' name={field} onClick={updateValue}>{data[1]?.[field]}</button>
    </ div>
  )
}

export default FormDoubleButton