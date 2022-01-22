import React, { useEffect, useState } from "react";

const FormSelect = ({ field, updateValue, preselection }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(dropdown) {
      const res = await fetch(`/api/dropdown/${dropdown}`);
      const resData = await res.json();
      setData(resData[dropdown])
    }
    fetchData(field)
  }, [field]);

  //NO FUNCIONA EL CHECKED NO PERMITE CAMBIAR REVISAR ALGUNA ALTERNATIVA 
  // checked={preselection === singleData[field]}


  return (
    <div>
      {data &&
        data.map(singleData => (
          <b key={singleData.id}>
            <input type="radio" value={singleData.id} name={field} onChange={updateValue} />{singleData[field==='account_type'?'type':field]}
          </b >
        ))
      }
    </div >
  )
}

export default FormSelect