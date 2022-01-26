import React, { useEffect, useState } from "react";
import '../../auth/form.css'

const FormTypeOfAccount = ({ field, updateValue, clicked }) => {
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
    <div id='demobuttons' className="userorgselection">
      <button key={data[0]?.id} value={1} className={!clicked?'user':''} id='demobuttonorg' name={field} onClick={updateValue}>{data[0]?.type}</button>
      <button key={data[1]?.id} value={2} className={!clicked?'':'org'} id='demobuttonuser' name={field} onClick={updateValue}>{data[1]?.type}</button>
    </ div>
  )
}

export default FormTypeOfAccount