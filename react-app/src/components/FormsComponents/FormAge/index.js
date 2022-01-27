import React, { useEffect, useState } from "react";
import '../../auth/form.css'

const FormAge = ({ field, updateValue, clicked }) => {
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
    <div id='selectionbuttons'>
      <button key={data[0]?.id} className={+clicked === 1?'clickedbutton':''} value={1} id='leftbutton' name={field} onClick={updateValue}>{data[0]?.age}</button>
      <button key={data[1]?.id} className={+clicked === 2?'clickedbutton':''} value={2} id='centerbutton' name={field} onClick={updateValue}>{data[1]?.age}</button>
      <button key={data[2]?.id} className={+clicked === 3?'clickedbutton':''} value={3} id='centerbutton' name={field} onClick={updateValue}>{data[2]?.age}</button>
      <button key={data[3]?.id} className={+clicked === 4?'clickedbutton':''} value={4} id='rightbutton' name={field} onClick={updateValue}>{data[3]?.age}</button>
    </ div>
  )
}

export default FormAge